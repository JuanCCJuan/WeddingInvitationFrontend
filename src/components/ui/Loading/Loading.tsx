/* STYLES */
import styles from "./Loading.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";

export const Loading = (): JSX.Element => {
    return (
        <div className={ `center ${styles.loading}` }>
            <div className={ `center ${styles.spinner}` }>
                {
                    Array.from({ length: 4 }).map((_, index) =>(
                        <span key={ index } className={ `${styles.line} ${styles[`line--${index + 1}`]}` }></span>
                    ))
                }
            </div>

            <p className={ styles.loading__text }>
                Cargando invitación
            </p>
        </div>
    );
}