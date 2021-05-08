import ComingScreen from "../СomingScreen/ComingScreen";
import "./Login.css"
import FormFields from "../FormFields/FormFields";
import React from "react";
import {useFormWithValidation} from "../../utils/formConfirm";
import {useHistory} from "react-router-dom";


function Login() {
    const {values, handleChange, resetFrom, errors, isValid} = useFormWithValidation();
    const history = useHistory();
    const linkTo = 'signup'

    const onSubmit = (e) => {
        e.preventDefault()
        history.push('/movies')

    }

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