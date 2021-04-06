import React from 'react';
import planet from "../../images/planet.svg";
import './promo.css';

function Promo() {
    return(
        <header className='promo'>
            <div className="promo__content">
                <img
                    src={planet}
                    className="promo__planet"
                    alt='Веб разработка, изображено абстрактное представление планеты "Земля" состаящая из слов "web"'
                />
                <div className="promo__text">
                    <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                    <h2 className='promo__sub-title'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
                </div>
            </div>
            <button type="button" className='promo__button'>Узнать больше</button>

        </header>
    )
}
export default Promo;
