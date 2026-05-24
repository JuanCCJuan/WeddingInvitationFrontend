/* STYLES */
import styles from "./Introduction.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";

/* COMPONENTS */
import { Divisor } from "../";
import { RemainingTime } from "./components/RemainingTime/RemainingTime";

export const Introduction = (): JSX.Element => {
    return (
        <>
            <Divisor position="top" />

            <section className={ `center ${styles.introduction}` }>
                <div className={ styles.note }>
                    <h3 className={ styles.note__title }>
                        Estás invitado a<br /><span className={ styles.title__mark }>nuestra boda</span>
                    </h3>

                    <p className={ styles.note__content }>
                        Será un honor contar con tu presencia para celebrar nuestro 
                        matrimonio y compartir juntos la alegría de este día tan especial.
                    </p>
                </div>

                <div className={ `${styles.note} ${styles["note--right"]}` }>
                    <h3 className={ styles.note__title }>
                        Falta<br />poco para<br />el <span className={ styles.title__mark }>gran</span> día
                    </h3>

                    {/* Tiempo restante */}
                    <RemainingTime />
                </div>
            </section>

            <Divisor position="bottom" />
        </>
    );
}