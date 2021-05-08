import Form from "../Form/Form";
import './Popup.css'

function Popup ({formName, buttonTitle, onSubmit, isValid, isOpen, togglePopup, children}) {


    return (
        <div className={`popup ${isOpen && 'popup_open'}`}>
            <div className='popup__content'>

                <h2 className='popup__title'>{buttonTitle}</h2>
                <Form
                    formName={formName}
                    buttonTitle={buttonTitle}
                    children={children}
                    onSubmit={onSubmit}
                    isValid={isValid}
                    popupStyle={true}
                />
                <button className='popup__button-close' onClick={togglePopup}>Закрыть</button>
            </div>
        </div>
    )
}

export default Popup