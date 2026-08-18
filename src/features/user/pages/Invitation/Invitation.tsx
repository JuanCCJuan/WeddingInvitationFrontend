/* STYLES */
import styles from "./Invitation.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";
import { useData } from "../../hooks/useData";
import { useTime } from "../../../../hooks/useTime";
import { usePopupContext } from "../../hooks/usePopupContext";

/* COMPONENTS */
import { Error, Loading } from "../../../../components/ui";
import { Cover, Background, Sections, ConfirmPopup, CancelPopup } from "../../components";

const finalTime: number = new Date("2026-08-20T00:00:00.000-06:00").getTime();

export const Invitation = (): JSX.Element => {
    const { popupState } = usePopupContext();

    // Obtiene la informacion de la invitacion
    const { isError, isLoading, invitation } = useData();

    // Obtiene el tiempo maximo de validez de la invitacion
    const { offset } = useTime(finalTime);

    if(offset === 0) {
        return <Error message="Lamentamos que no hayas aceptado tu invitación a tiempo, razón por la cual ha sido cancelada :(." />
    }

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