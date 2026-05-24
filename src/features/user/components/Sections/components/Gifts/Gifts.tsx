/* STYLES */
import styles from "./Gifts.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";

/* ICONS */
import giftIcon from "/assets/icons/gift.svg";
import creditIcon from "/assets/icons/credit.svg";
import liverpoolIcon from "/assets/icons/liverpool.svg";

export const Gifts = (): JSX.Element => {
    return (
        <section className={ `center ${styles.gifts}` }>
            <h3 className={ styles.gifts__title }>
                <span className={ styles.title__letter }>R</span>egalos
            </h3>

            <img className={ styles.gifts__image } src={ giftIcon } alt="Regalo" loading="lazy" />

            <p>
                Tu compañía en este día es el mejor obsequio que podemos recibir. 
                Pero si deseas tener un detalle con nosotros, aquí encontrarás nuestros datos.
            </p>

            <div className={ `center ${styles.gifts__actions}` }>
                {/* Cuenta bancaria */}
                <div className={ styles.info }>
                    <h4 className={ styles.info__title }>Cuenta Nu</h4>

                    <p className={ `center ${styles.info__account}` }>
                        <img className={ styles.icon } src={ creditIcon } alt="Cuenta" loading="lazy" /> 5101 2570 5555 3542
                    </p>
                </div>

                {/* Mesa de regalos Liverpool */}
                <div className={ styles.info }>
                    <h4 className={ styles.info__title }>Liverpool</h4>

                    <a className={ `center ${styles.info__action}` } href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51870533" target="_blank">
                        <img className={ styles.icon } src={ liverpoolIcon } alt="Liverpool" loading="lazy" /> Mesa de regalos
                    </a>
                </div>
            </div>
        </section>
    );
}