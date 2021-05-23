

function Popup ({message, isPopupOpen, popupToggle}) {

    return (
        <div className={`popup ${isPopupOpen && 'popup_open'}`}>
            <div className='popup__content'>
                <p className='popup__message'>{message}</p>
                <button className='popup__button-close' onClick={popupToggle}>Закрыть</button>
            </div>
        </div>
    )
}

export default Popup
