import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import React from "react";
import Footer from "../Footer/Footer";

function Movies ({onAddMovies, findMovies, searching, showMovies, ShortFilmOn,
                     isShortFilmOn, onLike, myMovies, movies, isFindNothing}) {

    const showButton = movies.length !== showMovies.length

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
                {!isFindNothing ?
                    <MoviesCardList
                        movies={showMovies}
                        myMovies={myMovies}
                        searching={searching}
                        onLike={onLike}
                    /> :
                    <p>Ничего не найдено</p>
                }
                { showButton && <button className="movies__button" onClick={onAddMovies}>Еще</button>}
            </div>
            <Footer/>
        </>
    )
}

export default Movies
