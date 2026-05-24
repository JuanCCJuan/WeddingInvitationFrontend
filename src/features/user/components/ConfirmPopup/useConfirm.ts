/* DEPENDENCIES */
import { useParams } from "react-router";
import { useEffect, useMemo, useRef } from "react";
import { usePopupContext } from "../../hooks/usePopupContext";
import { useInvitationContext } from "../../hooks/useInvitationContext";
import { updateInvitationStatus } from "../../utils/updateInvitationStatus";

export const useConfirm = () => {
    // Parametros
    const { id } = useParams();

    const controllerRef = useRef<AbortController | null>(null);

    // Proveedores
    const { setPopupState } = usePopupContext();
    const { invitation, setInvitation } = useInvitationContext();

    useEffect(() => {
        return () => {
            controllerRef.current?.abort();
        };
    }, []);

    if(!invitation || !id) {
        throw new Error("No hay invitacion");
    }

    // lista total de invitados
    const finalGuests: string[] = [invitation.head, ...invitation.guests];

    // Obtiene el titulo final
    const finalTitle = useMemo(() => {
        const { head, guests } = invitation;

        if(guests.length === 0) return head;
        if(guests.length === 1) return `${head} & ${guests[0]}`;

        return `${head} & Familia`;
    }, [invitation]);

    // Cierra el popup
    const handleClose = (): void => {
        setPopupState({
            showCancelPopup: false, 
            showConfirmPopup: false, 
        });
    }

    // Maneja la aceptacion de la invitacion
    const handleConfirm = async () => {
        // Aborta y reinicializa el controller
        controllerRef.current?.abort();
        controllerRef.current = new AbortController();

        const newInvitation = await updateInvitationStatus(id, "ACCEPTED", controllerRef.current.signal);

        if(newInvitation) {
            setInvitation(newInvitation);
            handleClose();
        }
    }

    return {
        finalTitle, 
        finalGuests, 
        handleClose, 
        handleConfirm, 
    };
}