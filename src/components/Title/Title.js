import "./Title.css"

function Title ({title, subClassName}) {

    const className = `section__title ${subClassName && subClassName}`
    return(
        <>
            <h2 className={className}>{title}</h2>
            <hr className="section__line"/>
        </>
    )
}

export default Title
