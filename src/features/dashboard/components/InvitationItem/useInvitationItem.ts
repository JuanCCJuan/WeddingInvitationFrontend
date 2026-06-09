/* DEPENDENCIES */
import { useState, useEffect } from "react";
import { type Status } from "../../../../types/UserInvitation";

export const useInvitationItem = () => {
    // Estado para la copia del link
    const [isCopy, setIsCopy] = useState<boolean>(false);

    useEffect(() => {
        if(!isCopy) return;

        const timeout = setTimeout(() => {
            setIsCopy(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        }
    }, [isCopy]);

    // Obtiene la informacion del estatus de la invitacion
    const getStatusInfo = (status: Status): [string, string] => {
        switch(status) {
            case "PENDING": 
                return ["#FFC83E", "Pendiente"];
            case "ACCEPTED": 
                return ["#008947", "Aceptada"];
            case "CANCELED": 
                return ["#F01E2C", "Cancelada"];
            default: 
                return ["#AAABAD", "?????????"];
        }
    }
    
    // Envia el link de la invitacion
    const handleSend = (_id: string): void => {
        const link: string = `${window.location.origin}/invitaciones/${_id}`;
    
        const message = `¡Estás invitado a mi boda! ${ link }`;
        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
        window.open(url, "_blank");
    }
    
    // Copia el link al portapapeles
    const handleCopy = async (_id: string): Promise<void> => {
        const link: string = `${window.location.origin}/invitaciones/${_id}`;
    
        try {
            await navigator.clipboard.writeText(link);
            setIsCopy(true);
        } catch (error) {
            console.error(`Error al copiar: ${(error as Error).message}`);
        }
    }

    return {
        isCopy, 
        handleCopy, 
        handleSend, 
        getStatusInfo, 
    };
}