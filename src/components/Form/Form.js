function Form({buttonTitle, formName, onSubmit, children, isValid, popupStyle}) {
    const buttonClass = `form__button ${popupStyle && 'form__button_popup'} ${!isValid && "form__button_disabled"}`
    return(
        <form className="form" name={formName} onSubmit={onSubmit} noValidate>
            {children}
            <button className={buttonClass} type="submit">{buttonTitle}</button>
        </form>
    )
}
export default Form