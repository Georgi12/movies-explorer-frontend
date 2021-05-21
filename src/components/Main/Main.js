import React from 'react';
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

function Main({loggedIn}) {
    return(
        <>
            <Promo loggedIn={loggedIn}/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
        </>
    )
}

export default Main;
