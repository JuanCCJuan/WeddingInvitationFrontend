/* STYLES */
import styles from "./Location.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";

/* COMPONENTS */
import { Divisor } from "../Divisor/Divisor";

/* ICONS */
import ceremonyIcon from "/assets/icons/ceremony.svg";
import locationIcon from "/assets/icons/location.svg";
import celebrationIcon from "/assets/icons/celebration.svg";

export const Location = (): JSX.Element => {
    return (
        <>
            <Divisor position="top" />

            <section className={ `center ${styles.location}` }>
                {/* Ceremonia */}
                <article className={ styles.subsection }>
                    <h3 className={ styles.subsection__title }>
                        <span className={ styles.title__letter }>C</span>eremonia
                    </h3>

                    <img className={ styles.subsection__image } src={ ceremonyIcon } alt="Ceremonia" loading="lazy" />

                    <div className={ styles.info }>
                        <h4 className={ styles.info__title }>Parroquia del Espíritu Santo</h4>
                        <p>C. Miguel Ramos Arizpe 385, Magaña, 44800 Guadalajara, Jal.</p>
                        <strong className={ styles.info__time }>a las 05:00 P.M.</strong>
                    </div>

                    <a className={ styles.subsection__action } href="https://maps.app.goo.gl/r4RqzsMRPxSYJw4g8" target="_blank">
                        <img className={ styles.action__icon } src={ locationIcon } alt="Ubicación" loading="lazy" /> Ver ubicación
                    </a>
                </article>

                {/* Celebración */}
                <article className={ styles.subsection }>
                    <h3 className={ styles.subsection__title }>
                        <span className={ styles.title__letter }>C</span>elebración
                    </h3>

                    <img className={ styles.subsection__image } src={ celebrationIcon } alt="Celebración" loading="lazy" />

                    <div className={ styles.info }>
                        <h4 className={ styles.info__title }>Salón de Eventos Emes</h4>
                        <p>Calz. Revolución 2120, Sutaj, 44840 Guadalajara, Jal.</p>
                        <strong className={ styles.info__time }>a las 07:00 P.M.</strong>
                    </div>

                    <a className={ styles.subsection__action } href="https://maps.app.goo.gl/ezhDZ33yCQX8YPLX7" target="_blank">
                        <img className={ styles.action__icon } src={ locationIcon } alt="Ubicación" loading="lazy" /> Ver ubicación
                    </a>
                </article>
            </section>

            <Divisor position="bottom" />
        </>
    );
}