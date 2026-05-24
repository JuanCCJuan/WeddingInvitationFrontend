/* DEPENDENCIES */
import { usePopupContext } from "../../../../hooks/usePopupContext";
import { useInvitationContext } from "../../../../hooks/useInvitationContext";

export const useConfirmation = () => {
    // Proveedores
    const { setPopupState } = usePopupContext();
    const { invitation } = useInvitationContext();

    // Verifica si la invitacion esta pendiente
    const isPending: boolean = invitation?.status === "PENDING";

    // Muestra el popup de cancelar
    const handleShowCancel = (): void => {
        setPopupState({
            showCancelPopup: true, 
            showConfirmPopup: false, 
        });
    }

    // Muestra el popup de confirmar
    const handleShowConfirm = (): void => {
        setPopupState({
            showCancelPopup: false, 
            showConfirmPopup: true, 
        });
    }

    return {
        isPending, 
        handleShowCancel, 
        handleShowConfirm, 
    }
}