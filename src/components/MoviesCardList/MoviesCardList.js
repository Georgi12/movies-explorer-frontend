import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";
import Preloader from "../Preloader/Preloader";


function MoviesCardList({movies, myMovies, searching, deleteModeOn, onLike}) {

    return (
        <>
            {searching ? <Preloader/> :

                <div className="cardList">
                    {movies.map((movie) => <MoviesCard
                        key={movie.movieId}
                        movie={movie}
                        myMovies={myMovies}
                        deleteModeOn={deleteModeOn}
                        onLike={onLike}
                    />)}
                </div>
            }

        </>
    )
}

export default  MoviesCardList
