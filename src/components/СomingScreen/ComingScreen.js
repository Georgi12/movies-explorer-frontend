import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Form from "../Form/Form";
import {Link} from "react-router-dom";

function ComingScreen({buttonTitle, linkTitle, linkDescription, title, formName, children, onSubmit, isValid, linkTo}) {
    return(
        <>
            <div className="coming-screen">
                <NavigationMenu notNavigation={true} title={title}/>
                <Form
                    formName={formName}
                    buttonTitle={buttonTitle}
                    children={children}
                    onSubmit={onSubmit}
                    isValid={isValid}
                />
                <div className="coming-screen__basement">
                    <p className="coming-screen__link-description">{linkDescription}</p>
                    <Link className="coming-screen__link" to={linkTo} >{linkTitle}</Link>
                </div>
            </div>
        </>
    )
}

export default ComingScreen