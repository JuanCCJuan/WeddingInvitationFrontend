/* DEPENDENCIES */
import { useEffect, useRef } from "react";
import { useParams } from "react-router";
import { usePopupContext } from "../../hooks/usePopupContext";
import { useInvitationContext } from "../../hooks/useInvitationContext";
import { updateInvitationStatus } from "../../utils/updateInvitationStatus";

export const useCancel = () => {
    const { id } = useParams();
    const { setPopupState } = usePopupContext();
    const { setInvitation } = useInvitationContext();

    const controllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        return () => {
            controllerRef.current?.abort();
        }
    }, []);

    if(!id) {
        throw new Error("No existe un ID");
    }

    // Cierra el popup
    const handleClose = () => {
        setPopupState({
            showCancelPopup: false, 
            showConfirmPopup: false, 
        });
    }

    // Cancela la invitacion
    const handleCancel = async () => {
        // Aborta y reinicializa el controller
        controllerRef.current?.abort();
        controllerRef.current = new AbortController();

        const newInvitation = await updateInvitationStatus(id, "CANCELED", controllerRef.current.signal);

        if(newInvitation) {
            setInvitation(newInvitation);
            handleClose();
        }
    }

    return {
        handleClose, 
        handleCancel, 
    };
}