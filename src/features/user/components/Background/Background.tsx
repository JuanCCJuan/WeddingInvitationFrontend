/* STYLES */
import styles from "./Background.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";

/* IMAGES */
import background from "/assets/background.webp";

export const Background = (): JSX.Element => {
    return (
        <div className={ styles.background }>
            <img 
                alt="Background" 
                src={ background } 
                fetchPriority="high" 
                className={ `image ${styles.background__image}` } 
            />
        </div>
    );
}