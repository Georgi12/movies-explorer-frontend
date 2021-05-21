function FormFields({username, email, password, value, onSetValue, errors}) {

    return(
        <>
            {
                username &&
                <>
                    <label className="field-name" htmlFor="name">Имя</label>
                    <input
                        className={`field ${errors.name && "field_error_active"}`} type="text" id="name" name="name" value={value.username}
                        onChange={onSetValue} minLength="2" maxLength="30" required
                    />
                    <span className="error">{errors.name || ""}</span>

                </>

            }
            {
                email &&
                <>
                    <label className="field-name" htmlFor="email">E-mail</label>
                    <input
                        className={`field ${errors.email && "field_error_active"}`} type="email" id="email" name="email" value={value.email}
                        onChange={onSetValue} minLength="3" maxLength="50" required
                    />
                    <span className="error">{errors.email || ""}</span>
                </>
            }
            {
                password &&
                <>
                    <label className="field-name" htmlFor="password">Пароль</label>
                    <input
                        className={`field ${errors.password && "field_error_active"}`} type="password" id="password" name="password" value={value.password}
                        onChange={onSetValue} minLength="8" required
                    />
                    <span className="error">{errors.password || ""}</span>
                </>

            }
        </>
    )
}

export default FormFields