import ComingScreen from "../СomingScreen/ComingScreen";
import FormFields from "../FormFields/FormFields";
import React from "react";
import {useFormWithValidation} from "../../utils/formConfirm";


function Login({onSubmit}) {
    const {values, handleChange, errors, isValid} = useFormWithValidation();
    const linkTo = 'signup'


    return(
        <div className="login">
            <ComingScreen
                buttonTitle={"Войти!"}
                linkTitle={"Регистрация"}
                linkDescription={"Ещё не зарегистрированы?"}
                title={"Рады видеть!"}
                formName={"login"}
                onSubmit={onSubmit}
                isValid={isValid}
                linkTo={linkTo}
                values={values}

            >
                <FormFields
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

export default Login
