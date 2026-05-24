/* DEPENDENCIES */
import type { Status, UserInvitation } from "../../../types/UserInvitation";

export const updateInvitationStatus = async (id: string, status: Status, signal: AbortSignal): Promise<UserInvitation | null> => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/invitations/${id}`, {
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify({ status }), 
            method: "PATCH", 
            signal, 
        });

        if(!response.ok) {
            throw new Error("Ha habido un problema en la petición");
        }

        const data: UserInvitation = await response.json();

        return data;
    } catch(error) {
        const { name, message } = (error as Error);

        console.error(name === "AbortError" ? "Se ha cancelado la petición previa" : message);

        return null;
    }
}