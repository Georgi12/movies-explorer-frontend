import './Footer.css'

function Footer() {
    return(
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__nav-case'>
                <p className='footer__copyright'>&copy; 2021</p>
                <nav className='footer__navigation'>
                    <a className='footer__link' href='https://praktikum.yandex.ru/'>Яндекс.Практикум</a>
                    <a className='footer__link' href='https://github.com/Georgi12'>Github</a>
                    <a className='footer__link' href='https://www.facebook.com/gedrargerum'>Facebook</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer