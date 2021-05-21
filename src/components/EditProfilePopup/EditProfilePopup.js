import Popup from '../Popup/Popup'
import FormFields from "../FormFields/FormFields";

function EditProfilePopup({onSubmit, isOpen, values, handleChange, errors, isValid, resetFrom, togglePopup}) {


    return(
        <>
            <Popup
                formName={'editProfile'}
                buttonTitle={'Редактировать профиль'}
                onSubmit={onSubmit}
                isValid={isValid}
                isOpen={isOpen}
                togglePopup={togglePopup}
            >
                <FormFields
                    email={true}
                    username={true}
                    value={values}
                    onSetValue={handleChange}
                    errors={errors}
                />
            </Popup>
        </>
    )
}

export default EditProfilePopup