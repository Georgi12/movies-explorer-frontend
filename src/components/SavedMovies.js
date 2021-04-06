import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function SavedMovies({myMovies}) {
    return(
        <div>
            <SearchForm/>
            <MoviesCardList movies={myMovies}/>
        </div>
    )
}

export default SavedMovies
