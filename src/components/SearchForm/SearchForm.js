import React  from 'react';
import FilterCheckbox from "../FilterCheckbox";

function SearchForm (onSubmit) {

    const [isShortFilmOn, setIsShortFilmOn] = React.useState(false)


    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="text"/>
                <button>></button>
            </div>
            <FilterCheckbox value={isShortFilmOn} setValue={setIsShortFilmOn}/>
        </form>
    )
}

export default SearchForm
