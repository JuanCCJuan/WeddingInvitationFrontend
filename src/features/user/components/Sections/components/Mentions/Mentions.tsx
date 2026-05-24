/* STYLES */
import styles from "./Mentions.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";
import { mentionsList } from "./mentionsList";

export const Mentions = (): JSX.Element => {
    return (
        <ol className={ `center ${styles.mentions}` }>
            {
                mentionsList.map(mention => (
                    <li key={ mention.role } className={ styles.mention }>
                        <h4 className={ styles.mention__title }>
                            { mention.title } <span className={ styles.title__role }>{ mention.role }</span>
                        </h4>

                        <p className={ styles.mention__content }>
                            { mention.firstPerson }<br />{ mention.secondPerson }
                        </p>
                    </li>
                ))
            }
        </ol>
    );
}