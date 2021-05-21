import logo from "../../images/logo.svg"
import useBreakpoints from "../../utils/MediaQueryRecognizer";
import React from "react";

function NavigationMenu({title, notNavigation, children, firstMenu}) {
    const isTablet = useBreakpoints().tabletResolution
    const [isOpen, setIsOpen] = React.useState(false)
    const menuToggle = () => {
        if(isTablet) {
            setIsOpen(!isOpen)
        }

    }
    if(!isTablet || firstMenu || notNavigation) {
        return (

            <div className={`menu ${notNavigation && "menu_column-version"}`}>
                <img className="menu__logo" alt="логитип" src={logo}/>

                {title && <p className="menu__title">{title}</p>}
                {!notNavigation && <nav className="menu__navigation">{children}</nav>}

            </div>
        )
    } else {
        return (
            <>

                <div className={!isOpen ? 'menu': 'menu menu_popup-open'}>
                    <img className="menu__logo" alt="логитип" src={logo}/>
                    <button className='menu__hamburger' onClick={menuToggle}/>
                </div>

                <div className={isOpen ? 'menu__popup menu__popup_active' : 'menu__popup'}>
                    <button className='menu__close' onClick={menuToggle}/>
                    <nav className='menu__navigation_tablet'>{children}</nav>
                </div>
            </>

        )}
    }


export default NavigationMenu