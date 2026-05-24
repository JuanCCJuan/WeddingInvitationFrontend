/* STYLES */
import styles from "./CancelPopup.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";
import { useCancel } from "./useCancel";

/* ICONS */
import closeIcon from "/assets/icons/close.svg";

export const CancelPopup = (): JSX.Element => {
    const { handleClose, handleCancel } = useCancel();

    return (
        <div className={ `center ${styles.blur}` } onClick={ handleClose }>
            <div className={ `center ${styles.popup}` } onClick={ (e) => e.stopPropagation() }>
                <button className={ styles.popup__close } type="button" onClick={ handleClose }>
                    <img className={ styles.close__icon } src={ closeIcon } alt="Cerrar" loading="lazy" />
                </button>

                <h3 className={ styles.popup__title }>
                    ¿Estás seguro de cancelar la invitación?
                </h3>

                <p className={ styles.popup__content }>
                    La invitación ya no se podrá recuperar y aparecerá como inactiva.
                </p>

                <button className={ styles.popup__confirm } type="button" onClick={ handleCancel }>
                    Cancelar
                </button>
            </div>
        </div>
    );
}