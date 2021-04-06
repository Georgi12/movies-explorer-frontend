import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies ({movies}) {
    return(
        <div>
            <SearchForm/>
            <MoviesCardList movies={movies}/>
            <button>Еще</button>
        </div>
    )
}

export default Movies
