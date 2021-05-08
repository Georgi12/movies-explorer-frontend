import Title from "../Title/Title";
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about">
            <Title title={"О проекте"}/>
            <ul className="about__paragraphs">
                <li className="about__paragraph">
                    <h3 className="about__term">Дипломный проект включал 5 этапов</h3>
                    <p className="about__definition">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>

                <li className="about__paragraph">
                    <h3 className="about__term">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__definition">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>

            </ul>

            <div className="about__back">
                <p className="about__back-title">1 неделя</p>
                <p className="about__back-sub-title">4 недели</p>
            </div>

            <div className="about__back about_color_false">
                <p className="about__back-title ">Back-end</p>
                <p className="about__back-sub-title">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject
