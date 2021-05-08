import {useHistory} from "react-router-dom";
import "./NotFoundError.css"

function NotFoundError() {
    const history = useHistory()
    function bacButton() {
        history.goBack()
    }

    return(
        <div className="not-found-error">
            <h2 className="not-found-error__error-number">404</h2>
            <p className="not-found-error__error-description">страница не найдена</p>
            <button className="not-found-error__button" onClick={bacButton}>Назад</button>
        </div>
    )
}

export default NotFoundError