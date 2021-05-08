import "./MoviesCard.css"
import React from "react";

function MoviesCard({movie, myMovies}) {
    const isLiked = myMovies.some(myMovie => myMovie.id === movie.id)
    const likeButtonClass = `movie-card__like ${isLiked && 'movie-card__like_active'}`

    const hours = Math.floor( movie.duration / 60 );
    const minutes = movie.duration % 60
    let stringDuration = `${minutes}м`
    if(hours !== 0) {stringDuration = `${hours}ч${stringDuration}`}


    const onLike = () => {
        if(myMovies.some(myMovie => myMovie.id === movie.id)) {
            myMovies.forEach(myMovie => {})
        }
    }
    return(
        <article className="movie-card">
            <img className="movie-card__image" src={`${movie.image}`} alt={movie.nameRU}/>
            <div className="movie-card__information">
                <p className="movie-card__title">{movie.nameRU}</p>
                <button className={likeButtonClass} type="button" onClick={onLike}/>
            </div>
            <p className="movie-card__duration">{stringDuration}</p>
        </article>
    )
}

export default MoviesCard

// country: String,
// director: String,
// duration: Number,
// year: String,
// description: String,
// image: String,
//
// trailer: String,
// thumbnail:String,
// owner: ObjectId,
// movieId: Number,
// nameRU:  String,
// nameEN:  String,

