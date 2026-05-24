/* DEPENDENCIES */
import { type Status } from "../../../../types/UserInvitation";

// Obtiene la informacion del estatus de la invitacion
export const getStatusInfo = (status: Status): [string, string] => {
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
export const handleSend = (_id: string): void => {
    const link: string = `${window.location.origin}/invitaciones/${_id}`;

    const message = `¡Estás invitado a mi boda! ${ link }`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}