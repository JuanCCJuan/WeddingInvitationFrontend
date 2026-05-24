/* STYLES */
import styles from "./Invitation.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";
import { useData } from "../../hooks/useData";
import { usePopupContext } from "../../hooks/usePopupContext";

/* COMPONENTS */
import { Error, Loading } from "../../../../components/ui";
import { Cover, Background, Sections, ConfirmPopup, CancelPopup } from "../../components";

export const Invitation = (): JSX.Element => {
    const { popupState } = usePopupContext();

    // Obtiene la informacion de la invitacion
    const { isError, isLoading, invitation } = useData();

    if(isLoading) {
        return <Loading />;
    }

    if(isError || !invitation) {
        return <Error message="Ha ocurrido un error al tratar de obtener tu invitación." />;
    }
    
    if(invitation.status === "CANCELED") {
        return <Error message="Ha ocurrido un error al tratar de obtener tu invitación. Posiblemente la cancelaste :(." />;
    }

    return (
        <div className={ styles.invitation }>
            <Background />
            <Cover />
            <Sections />

            { popupState.showCancelPopup && <CancelPopup /> }
            { popupState.showConfirmPopup && <ConfirmPopup /> }
        </div>
    );
}