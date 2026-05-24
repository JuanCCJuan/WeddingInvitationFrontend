/* STYLES */
import styles from "./Error.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";

interface Props {
    message: string;
}

export const Error = ({ message }: Props): JSX.Element => {
    return (
        <div className={ `center ${styles.error}` }>
            <h1 className={ styles.error__title }>Error</h1>
            <p className={ styles.error__description }>{ message }</p>
        </div>
    );
}