/* STYLES */
import styles from "./Cover.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";

export const Cover = (): JSX.Element => {
    return (
        <main className={ `center ${styles.cover}` }>
            <header>
                <h1 className={ styles.title }>
                    <span className={ styles.title__letter }>B</span>arbara & <span className={ styles.title__letter }>J</span>uan
                </h1>

                <h2 className={ styles.subtitle }>¡Nos casamos!</h2>
            </header>

            <h2 className={ styles.subtitle }>
                Septiembre
                <br /><span className={ styles.subtitle__day }>6</span><br />
                2026
            </h2>
        </main>
    );
}