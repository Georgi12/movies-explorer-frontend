import React  from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm ({searchMovie, getApiData, setShowMovies, setSearching}) {
    const [isShortFilmOn, setIsShortFilmOn] = React.useState(false)

    const onSubmit = (e) => {
        searchMovie(e, getApiData, setShowMovies, isShortFilmOn, setSearching)
    }

    return (
        <form className="movie-form" onSubmit={onSubmit}>
            <div className="movie-form__content">
                <input className="movie-form__field" type="text" placeholder="Фильм"/>
                <button className="movie-form__submit"/>
            </div>
            <FilterCheckbox value={isShortFilmOn} setValue={setIsShortFilmOn}/>
        </form>
    )
}

export default SearchForm
