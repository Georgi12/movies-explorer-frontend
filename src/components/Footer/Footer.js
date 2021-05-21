function Footer() {
    return(
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__nav-case'>
                <p className='footer__copyright'>&copy; 2021</p>
                <nav className='footer__navigation'>
                    <a className='footer__link' href='https://praktikum.yandex.ru/' target='_blank'>Яндекс.Практикум</a>
                    <a className='footer__link' href='https://github.com/Georgi12' target='_blank'>Github</a>
                    <a className='footer__link' href='https://www.facebook.com/gedrargerum' target='_blank'>Facebook</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer