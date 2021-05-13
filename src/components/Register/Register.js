import ComingScreen from "../СomingScreen/ComingScreen";
import FormFields from "../FormFields/FormFields";
import React from "react";
import {useFormWithValidation} from "../../utils/formConfirm";
import {useHistory} from "react-router-dom";

function Register() {
    const {values, handleChange, resetFrom, errors, isValid} = useFormWithValidation();
    const history = useHistory()
    const linkTo = 'signin'

    const onSubmit = (e) => {
        e.preventDefault()
        history.push('/signin')

    }
    return(
        <div className="register">
            <ComingScreen
                buttonTitle={"Регистрация"}
                linkTitle={"Войти"}
                linkDescription={"Уже зарегистрированы?"}
                title={"Добро пожаловать!"}
                formName={"registr"}
                onSubmit={onSubmit}
                isValid={isValid}
                linkTo={linkTo}

            >
                <FormFields
                    username={true}
                    email={true}
                    password={true}
                    value={values}
                    onSetValue={handleChange}
                    errors={errors}
                />

            </ComingScreen>
        </div>
    )
}

export default Register