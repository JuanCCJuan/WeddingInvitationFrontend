/* STYLES */
import styles from "./ConfirmPopup.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";
import { useConfirm } from "./useConfirm";

/* ICONS */
import closeIcon from "/assets/icons/close.svg";

export const ConfirmPopup = (): JSX.Element => {
    const { finalTitle, finalGuests, handleClose, handleConfirm } = useConfirm();

    return (
        <div className={ `center ${styles.blur}` } onClick={ handleClose }>
            <div className={ `center ${styles.popup}` } onClick={ (e) => e.stopPropagation() }>
                <button className={ `center ${styles.popup__close}` } type="button" onClick={ handleClose }>
                    <img className={ styles.close__icon } src={ closeIcon } alt="Cerrar" loading="lazy" />
                </button>

                <h3 className={ styles.popup__title }>
                    Esta invitación es para<br />
                    <span className={ styles.title__names }>{ finalTitle }</span>
                </h3>

                {
                    (finalGuests.length > 2) && 
                    <p className={ styles.popup__content }>
                        Esta invitación es para <strong>{ finalGuests.length }</strong> personas,&nbsp; 
                        que incluye a { finalGuests.slice(0, -1).join(", ") } y { finalGuests.at(-1) }
                    </p>
                }

                <p className={ styles.popup__notice }>
                    Recuerda que es un evento de<br />
                    <strong className={ styles.notice__mark }>NO NIÑOS</strong>
                </p>

                <button className={ styles.popup__confirm } type="button" onClick={ handleConfirm }>
                    Confirmar
                </button>
            </div>
        </div>
    );
}