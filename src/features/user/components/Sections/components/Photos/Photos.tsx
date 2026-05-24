/* STYLES */
import styles from "./Styles.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";
import { useTime } from "../../../../../../hooks/useTime";

/* COMPONENTS */
import { Thumbnail } from "./Thumbnail";

const finalTime: number = new Date("2026-09-06T17:00:00.000-06:00").getTime();

export const Photos = (): JSX.Element => {
    const { offset } = useTime(finalTime);

    return (
        <section className={ `center ${styles.photos}` }>
            {/* Fotos de los novios */}
            <article className={ styles.subsection }>
                <h3 className={ styles.subsection__title }>
                    <span className={ styles.title__letter }>F</span>otos de los novios
                </h3>

                <ol className={ `center ${styles.slider}` }>
                    {
                        Array.from({ length: 12 }).map((_, index) => {
                            const src: string = `/assets/main/${index + 1}.webp`;

                            return <Thumbnail key={ index } src={ src } />
                        })
                    }
                </ol>
            </article>

            {/* Fotos del evento */}
            {
                (offset === 0) && 
                <article className={ styles.subsection }>
                    <h3 className={ styles.subsection__title }>
                        <span className={ styles.title__letter }>F</span>otos del evento
                    </h3>

                    <p>Escanea el código QR para poder ver las fotos del evento y agregar las tuyas !</p>

                    <div className={ styles.subsection__qr }>
                        <img className="image" src="/public/assets/main/qr.webp" alt="QR" />
                    </div>
                </article>
            }
        </section>
    );
}