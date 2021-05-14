import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "../Movies/Movies.css"
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import React from "react";
import Footer from "../Footer/Footer";
import {useHistory} from "react-router-dom";

function SavedMovies({findMovies, ShortFilmOn, isShortFilm, searching, myMovies, onLike}) {

    const history = useHistory()

    const updateSubmit = (e) => {
        history.push('/movies')
        findMovies(e)
    }

    return(
        <>
            <NavigationMenu>
                <NavigateButtons/>
            </NavigationMenu>
            <div className="movies">
                <SearchForm
                    onSubmit={updateSubmit}
                    ShortFilmOn={ShortFilmOn}
                    isShortFilm={isShortFilm}
                />
                <MoviesCardList
                    movies={myMovies}
                    myMovies={myMovies}
                    searching={searching}
                    deleteModeOn={true}
                    onLike={onLike}
                />
            </div>
            <Footer/>
        </>

    )
}

export default SavedMovies
