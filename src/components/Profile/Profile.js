import React from "react";
import {Link} from "react-router-dom";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import {UserContext} from "../../context/UserContext";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";
import {useFormWithValidation} from "../../utils/formConfirm";


function Profile({updateUser}) {

    const [openIsPopup, setOpenPopup] = React.useState(false)
    const {values, handleChange, resetFrom, errors, isValid} = useFormWithValidation();

    const currentUser = React.useContext(UserContext)

    const updateUserModification = (e) => {
        e.preventDefault()
        updateUser(values.name, values.email )
        togglePopup()
    }

    const togglePopup = () => {
        setOpenPopup(!openIsPopup)
    }


    return(
        <>
            <NavigationMenu>
                <NavigateButtons/>
            </NavigationMenu>
            <div className='profile'>
                <h1 className='profile__name'>Привет, {currentUser.name}!</h1>
                <div className="profile__information">
                    <div className="profile__section">
                        <p className="profile__element">Имя</p>
                        <p className="profile__element">{currentUser.name}</p>
                    </div>

                    <hr className="profile__line"/>
                    <div className="profile__section">
                        <p className="profile__element">E-mail</p>
                        <p className="profile__element">{currentUser.email}</p>
                    </div>
                </div>
                <button className="profile__text profile__edit-btn" onClick={togglePopup}>Редактировать</button>
                <Link className="profile__text profile__exit" to='/'>Выйти из аккаунта</Link>
            </div>

            <EditProfilePopup
                onSubmit={updateUserModification}
                isOpen={openIsPopup}
                values={values}
                handleChange={handleChange}
                errors={errors}
                isValid={isValid}
                resetFrom={resetFrom}
                togglePopup={togglePopup}
            />
        </>
    )
}

export default Profile
