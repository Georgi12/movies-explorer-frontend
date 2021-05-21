import Title from "../Title/Title";
import authorPhoto from "../../images/author-photo.jpg";
import Footer from "../Footer/Footer";

function AboutMe() {
    return(
        <>
            <section className="about-me">
                <Title title={"Студент"}/>
                <div className="about-me__information">
                    <div className="about-me__information-text">
                        <h3 className="about-me__name">Георгий</h3>
                        <p className="about-me__annotation">Фуллстэк-разработчик, 28 лет</p>
                        <p className="about-me__description">
                            Я провижаю в Санкт-Петербурге, окончил ВУЗ СПБГЭТУ, или как раньше его называли, ЛЭТИ по профессии
                            инженер-электротехник. Но сейчас я не работаю по профессии, потому что я нашел свое признание - программирование.
                            На данный момент я занию должность middle python developer в крупной компании. После того как прошел курс
                            я загорелся собсвенным стратапом. Так как теперь помимо серверной логики я могу и создавать красивые
                            интерфейсы на стороне пользователя.

                            А еще у меня есть жена и кошка мейнкун по кличке Реша. Люблю смотреть Netflix, занимаюсь спортом.
                        </p>

                        <nav className="about-me__social">
                            <a className="about-me__social-linc" href="https://www.facebook.com/gedrargerum" target="_blank">FaceBook</a>
                            <a className="about-me__social-linc" href="https://github.com/Georgi12" target="_blank">GitHub</a>
                        </nav>
                    </div>
                    <img className="about-me__photo" src={authorPhoto} alt="Фотография разработчика проекта"/>
                </div>
                <h4 className="about-me__portfolio-title">Портфолио</h4>

                <nav className="about-me__portfolio">
                    <a className="about-me__portfolio-linc" href="https://github.com/Georgi12/how-to-learn" target='_blank'>Статичный сайт</a>
                    <a className="about-me__portfolio-linc" href="https://github.com/Georgi12/russian-travel" target='_blank'>Адаптивный сайт</a>
                    <a className="about-me__portfolio-linc" href="https://github.com/Georgi12/react-mesto-api-full" target='_blank'>Одностраничное приложение</a>
                </nav>
            </section>
        <Footer/>
    </>
    )
}

export default AboutMe
