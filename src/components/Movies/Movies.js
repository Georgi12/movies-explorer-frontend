import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import React from "react";
import Footer from "../Footer/Footer";

function Movies ({onAddMovies, findMovies, searching, showMovies, ShortFilmOn, isShortFilmOn, onLike, myMovies}) {

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
                    movies={showMovies}
                    myMovies={myMovies}
                    searching={searching}
                    onLike={onLike}
                />
                <button className="movies__button" onClick={onAddMovies}>Еще</button>
            </div>
            <Footer/>
        </>
    )
}

export default Movies
