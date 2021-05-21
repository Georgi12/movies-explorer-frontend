import {Link} from "react-router-dom";
import useBreakpoints from "../../utils/MediaQueryRecognizer";
import React from "react";


function NavigateButtons() {
    const isTablet = useBreakpoints().tabletResolution

    return(
        <>
            <Link to="movies" className="navigate-button">Фильмы</Link>
            <Link to="saved-movies" className="navigate-button">Сохранённые фильмы</Link>
            {isTablet && <Link to="/" className="navigate-button"><span>Главная</span></Link>}
            <Link to="profile" className="navigate-button navigate-button_account"><span>Аккаунт</span></Link>
        </>
    )
}

export default NavigateButtons
