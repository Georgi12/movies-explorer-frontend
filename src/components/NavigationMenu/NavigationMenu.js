import "./NavigationMenu.css"
import logo from "../../images/logo.svg"

function NavigationMenu({title, notNavigation, children}) {
    return(
        <div className={`menu ${notNavigation && "menu_column_version"}`}>
            <img
                className="menu__logo"
                alt="логитип" src={logo}
            />
            {title && <p className="menu__title">{title}</p>}
            {!notNavigation && <nav className="menu__navigation">{children}</nav>}

        </div>
    )
}

export default NavigationMenu