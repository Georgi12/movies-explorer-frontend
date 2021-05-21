import React  from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm ({onSubmit, ShortFilmOn, isShortFilm}) {
    return (
        <form className="movie-form" onSubmit={onSubmit}>
            <div className="movie-form__content">
                <input className="movie-form__field" type="text" placeholder="Фильм"/>
                <button className="movie-form__submit"/>
            </div>
            <FilterCheckbox value={isShortFilm} setValue={ShortFilmOn}/>
        </form>
    )
}

export default SearchForm
