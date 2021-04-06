
function MoviesCard({movie}) {
    const hours = Math.floor( movie.duration / 60 );
    const minutes = movie.duration % 60
    let stringDuration = `${minutes}м`
    if(hours !== 0) {
        stringDuration = `${hours}ч${stringDuration}`
    }

    return(
        <article>
            <img src={`${movie.image}`} alt={movie.nameRU}/>
            <p>{movie.nameRU}</p>
            <button type="button"/>
            <p>{stringDuration}</p>
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

