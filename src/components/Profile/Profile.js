import React from "react";
import {Link} from "react-router-dom";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import {UserContext} from "../../context/UserContext";
import {useFormWithValidation} from "../../utils/formConfirm";


function Profile({updateUser, signOutOn}) {

    const {values, handleChange, setDefaultValues, errors, isValid, setIsValid} = useFormWithValidation();

    const currentUser = React.useContext(UserContext)

    React.useEffect(() => {
        setDefaultValues({name: currentUser.name, email: currentUser.email})
    }, [currentUser])

    React.useEffect(() => {
        if(isValid && JSON.stringify({name: currentUser.name, email: currentUser.email}) === JSON.stringify(values)) {
            setIsValid(false)
        }
    }, [values])

    const buttonClassName = isValid ? "profile__text profile__edit-btn" : "profile__text profile__edit-btn profile__edit-btn_disabled"

    return(
        <>
            <NavigationMenu>
                <NavigateButtons/>
            </NavigationMenu>
            <div className='profile'>
                <h1 className='profile__name'>Привет, {currentUser.name}!</h1>

                <form className='profile__form' name='formName' noValidate onSubmit={(e) => updateUser(e, values)}>
                    <div className='profile__field-cell'>
                        <label htmlFor="name">Имя</label>
                        <input className='profile__field' type="text" id="name" name="name" value={values.name || ''}
                               onChange={handleChange} minLength="2" maxLength="30" required
                        />
                    </div>
                    <span className='profile__errors'>{errors.name || ''}</span>
                    <div className='profile__field-cell'>
                        <label htmlFor="email">Email</label>
                        <input  className='profile__field' type="email" id="email" name="email" value={values.email  || ''}
                                onChange={handleChange} minLength="3" maxLength="50" required
                        />
                    </div>
                    <span className='profile__errors'>{errors.email || ''}</span>
                    <button className={buttonClassName} type='submit' >Редактировать</button>
                </form>

                <Link className="profile__text profile__exit" onClick={signOutOn} to='/'>Выйти из аккаунта</Link>

            </div>
        </>
    )
}

export default Profile
