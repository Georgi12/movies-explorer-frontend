import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "./Movies.css"
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import React from "react";
import {MyMovieContext} from "../../context/MyMovieContext";
import {moviesConstanta} from "../../temporaryConstats";
import Footer from "../Footer/Footer";

function Movies ({searchMovie, addNewListMovie}) {
    const [showMovies, setShowMovies] = React.useState([])
    const [searching, setSearching] = React.useState(false)
    const [movies, setMovies] = React.useState([])

    const getMoviesApi = () => {
        // действия после запроса в базу
        const mm = moviesConstanta
        setMovies(mm)
        setShowMovies(mm.slice(0, 16))
    }

    const myMovies = React.useContext(MyMovieContext)

    const onAddMovies = () => {
        addNewListMovie(showMovies, setShowMovies, movies)
    }

    return(
        <>
            <NavigationMenu>
                <NavigateButtons/>
            </NavigationMenu>
            <div className="movies">
                <SearchForm
                    searchMovie={searchMovie}
                    setSearching={setSearching}
                    getApiData={getMoviesApi}
                    setShowMovies={setShowMovies}
                />
                <MoviesCardList
                    movies={showMovies}
                    myMovies={myMovies}
                    searching={searching}
                    onAddMovies={onAddMovies}
                />
            </div>
            <Footer/>
        </>
    )
}

export default Movies
