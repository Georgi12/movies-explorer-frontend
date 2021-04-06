import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({movies}) {

    return (
        <div>
            {movies.map((movie) => <MoviesCard key={movie.id} movie={movie}/>)}
        </div>
    )
}

export default  MoviesCardList
