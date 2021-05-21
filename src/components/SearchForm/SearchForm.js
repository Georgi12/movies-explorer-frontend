import React  from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useFormWithValidation} from "../../utils/formConfirm";

function SearchForm ({onSubmit, ShortFilmOn, isShortFilm}) {

    const { values, handleChange } = useFormWithValidation()

    return (
        <form
            className="movie-form"
            name='searchForm'
            onSubmit={(e) => onSubmit(e, values.findField)}
        >
            <div className="movie-form__content">
                <input className="movie-form__field" type="text" name='findField' placeholder="Фильм" onChange={handleChange} required/>
                <button className="movie-form__submit"/>
            </div>
            <FilterCheckbox value={isShortFilm} setValue={ShortFilmOn}/>
        </form>
    )
}

export default SearchForm
