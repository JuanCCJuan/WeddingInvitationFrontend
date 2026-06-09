/* STYLES */
import styles from "./InvitationItem.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";
import { useInvitationItem } from "./useInvitationItem";
import { type UserInvitation } from "../../../../types/UserInvitation";

/* ICONS */
import sendIcon from "/assets/icons/send.svg";
import copyIcon from "/assets/icons/copy.svg";
import checkIcon from "/assets/icons/check.svg";

export const InvitationItem = ({ status, head, guests, _id }: UserInvitation): JSX.Element => {
    const { isCopy, handleCopy, handleSend, getStatusInfo } = useInvitationItem();

    const [ backgroundColor, name ] = getStatusInfo(status);

    return (
        <li className={ styles.invitation }>
            <header className={ `center ${styles.invitation__header}` }>
                <span className={ styles.header__status } style={{ backgroundColor }}></span>
                
                <h2 className={ styles.header__name }>{ name }</h2>

                <button className={ `center ${styles.header__button} ${styles["header__button--copy"]}` } type="button" onClick={ () => handleCopy(_id) }>
                    <img className={ styles.button__icon } src={ isCopy ? checkIcon : copyIcon } alt="Send" />
                </button>

                <button className={ `center ${styles.header__button}` } type="button" onClick={ () => handleSend(_id) }>
                    <img className={ styles.button__icon } src={ sendIcon } alt="Send" />
                </button>
            </header>

            <p className={ styles.invitation__content }>
                <strong>Invitación para:</strong> { [head, ...guests].join(", ") }
            </p>
        </li>
    );
}