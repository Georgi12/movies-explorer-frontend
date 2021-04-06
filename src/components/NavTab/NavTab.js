import React from 'react';
import planet from '../../images/planet.svg'
import { Link } from "react-router-dom";

function NavTab() {
    return(
        <Link to="https://github.com/Joeyryanbridges">
            <img src={planet} className="githubIcon" alt={}/>
        </Link>
    )
}

