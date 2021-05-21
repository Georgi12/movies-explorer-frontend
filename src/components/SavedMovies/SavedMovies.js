import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "../Movies/Movies.css"
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import React from "react";
import Footer from "../Footer/Footer";

function SavedMovies({findMovies, ShortFilmOn, isShortFilmOn, searching, myMovies, onLike, showMyMovies}) {

    return(
        <>
            <NavigationMenu>
                <NavigateButtons/>
            </NavigationMenu>
            <div className="movies">
                <SearchForm
                    onSubmit={findMovies}
                    ShortFilmOn={ShortFilmOn}
                    isShortFilmOn={isShortFilmOn}
                />
                <MoviesCardList
                    movies={showMyMovies}
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
