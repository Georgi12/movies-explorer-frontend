import {Link} from "react-router-dom";
import './NavigateButtons.css'


function NavigateButtons() {
    return(
        <>
            <Link to="movies" className="navigate-button">Фильмы</Link>
            <Link to="saved-movies" className="navigate-button">Сохранённые фильмы</Link>
            <Link to="profile" className="navigate-button navigate-button_account"><span>Аккаунт</span></Link>
        </>
    )
}

export default NavigateButtons
