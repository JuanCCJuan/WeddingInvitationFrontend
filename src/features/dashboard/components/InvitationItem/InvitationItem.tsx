/* STYLES */
import styles from "./InvitationItem.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";
import { handleSend, getStatusInfo } from "./invitationActions";
import { type UserInvitation } from "../../../../types/UserInvitation";

/* ICONS */
import sendIcon from "/assets/icons/send.svg";

export const InvitationItem = ({ status, head, guests, _id }: UserInvitation): JSX.Element => {
    const [ backgroundColor, name ] = getStatusInfo(status);

    return (
        <li className={ styles.invitation }>
            <header className={ `center ${styles.invitation__header}` }>
                <span className={ styles.header__status } style={{ backgroundColor }}></span>
                
                <h2 className={ styles.header__name }>{ name }</h2>

                <button className={ `center ${styles.header__send}` } type="button" onClick={ () => handleSend(_id) }>
                    <img className={ styles.send__icon } src={ sendIcon } alt="Send" />
                </button>
            </header>

            <p className={ styles.invitation__content }>
                <strong>Invitación para:</strong> { [head, ...guests].join(", ") }
            </p>
        </li>
    );
}