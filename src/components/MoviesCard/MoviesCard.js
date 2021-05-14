import React from "react";

function MoviesCard({movie, myMovies, deleteModeOn, onLike}) {
    const isLiked = myMovies.some(myMovie => myMovie.id === movie.id)

    const likeButtonAction = () => {
        onLike(movie)
    }

    let likeButtonClass = isLiked === true ? 'movie-card__like movie-card__like_active' : 'movie-card__like'

    if(deleteModeOn) {
        likeButtonClass = 'movie-card__like movie-card__delete'
    }

    const hours = Math.floor( movie.duration / 60 );
    const minutes = movie.duration % 60
    let stringDuration = `${minutes}м`
    if(hours !== 0) {stringDuration = `${hours}ч${stringDuration}`}


    return(
        <article className="movie-card">
            <img className="movie-card__image" src={`${movie.image}`} alt={movie.nameRU}/>
            <div className="movie-card__information">
                <p className="movie-card__title">{movie.nameRU}</p>
                <button className={likeButtonClass} type="button" onClick={likeButtonAction}/>
            </div>
            <p className="movie-card__duration">{stringDuration}</p>
        </article>
    )
}

export default MoviesCard

