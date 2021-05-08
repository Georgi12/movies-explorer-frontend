import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "../Movies/Movies.css"
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import React from "react";
import {myMoviesConstanta} from "../../temporaryConstats";
import {MyMovieContext} from "../../context/MyMovieContext";
import Footer from "../Footer/Footer";

function SavedMovies({searchMovie, addNewListMovie}) {

    const [showMovies, setShowMovies] = React.useState([])
    const [searching, setSearching] = React.useState(false)
    const [movies, setMovies] = React.useState([])

    const getMoviesApi = () => {

        // действия после запроса в базу
        const svm = myMoviesConstanta
        setMovies(svm)
        setShowMovies(svm.slice(0, 16))
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

export default SavedMovies
