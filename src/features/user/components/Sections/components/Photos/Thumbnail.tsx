/* STYLES */
import styles from "./Styles.module.css";

/* DEPENDENCIES */
import { type JSX, useState } from "react";

interface Props {
    src: string;
}

export const Thumbnail = ({ src }: Props): JSX.Element => {
    // Estado para mostrar el popup de imagenes
    const [showImage, setShowImage] = useState<boolean>(false);

    return (
        <>
            <li className={ styles.thumbnail }>
                <img
                    src={ src } 
                    alt={ "Image" } 
                    onClick={ () => setShowImage(true) } 
                    className={ `image ${styles.thumbnail__image}` } 
                />
            </li>

            {
                showImage && 
                <div className={ `center ${styles.blur}` } onClick={ () => setShowImage(false) }>
                    <div className={ `center ${styles.image}` }>
                        <div className={ `center ${styles.image__close}` } onClick={ () => setShowImage(false) }>
                            <img className={ styles.close__icon } src="/assets/icons/close.svg" alt="Cerrar" loading="lazy" />
                        </div>

                        <img className={ `image ${styles.image__source}` } src={ src } alt="Full Image" />
                    </div>
                </div>
            }
        </>
    );
}