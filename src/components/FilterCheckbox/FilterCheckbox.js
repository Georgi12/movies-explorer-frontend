function FilterCheckbox({value, setValue}) {
    return (
        <div className="checkbox">
            <input
                className="checkbox__switcher"
                type="checkbox" checked={value}
                onChange={() => setValue(!value)}
            />
            <label>Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox
