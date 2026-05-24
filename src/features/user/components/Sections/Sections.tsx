/* STYLES */
import styles from "./Sections.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";

/* COMPONENTS */
import { Introduction, Mentions, Location, Gifts, Confirmation, Photos, Divisor } from "./components";

export const Sections = (): JSX.Element => {
    return (
        <div className={ styles.sections }>
            <Introduction />
            <Mentions />
            <Location />
            <Gifts />
            <Confirmation />
            <Photos />

            <>
                <Divisor position="top" />
                <h3 className={ styles.farewell }>Te esperamos</h3>
            </>
        </div>
    );
}