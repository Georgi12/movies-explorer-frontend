
function FilterCheckbox({value, setValue}) {
    return (
        <>
            <input
                className={`checkbox${value && "checkbox_active"}`}
                type="checkbox" checked={value}
                onChange={() => setValue(!value)}
            />
        </>
    )
}

export default FilterCheckbox
