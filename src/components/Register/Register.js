import ComingScreen from "../СomingScreen/ComingScreen";
import FormFields from "../FormFields/FormFields";
import React from "react";
import {useFormWithValidation} from "../../utils/formConfirm";

function Register({onSubmit}) {
    const {values, handleChange, errors, isValid} = useFormWithValidation();
    const linkTo = 'signin'

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
                values={values}

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
