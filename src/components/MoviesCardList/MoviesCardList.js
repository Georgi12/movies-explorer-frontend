import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css"
import React from "react";
import Preloader from "../Preloader/Preloader";


function MoviesCardList({movies, myMovies, searching, onAddMovies}) {

    return (
        <>
            {searching ? <Preloader/> :
                <>
                    <div className="cardList">
                        {movies.map((movie) => <MoviesCard key={movie.id} movie={movie} myMovies={myMovies}/>)}
                    </div>
                    <button className="cardList__button" onClick={onAddMovies}>Еще</button>
                </>
            }

        </>
    )
}

export default  MoviesCardList
