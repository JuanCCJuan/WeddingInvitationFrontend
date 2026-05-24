/* DEPENDENCIES */
import { useEffect, useState } from "react";
import { type UserInvitation } from "../../../types/UserInvitation";

export const useInfo = () => {
    // Estados para la obtencion de la informacion
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [invitations, setInvitations] = useState<UserInvitation[]>([]);
    
    useEffect(() => {
        const fetchInvitations = async () => {
            const URL = `${import.meta.env.VITE_API_URL}/api/invitations`;

            try {
                const response = await fetch(URL);

                if(!response.ok) {
                    throw new Error("Ha habido un error con la solicitud de invitaciones");
                }

                const invitations: UserInvitation[] = await response.json();

                setInvitations(invitations);
            } catch(error) {
                const { message } = (error as Error);

                console.error(message);

                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchInvitations();
    }, []);

    return {
        isError, 
        isLoading, 
        invitations, 
    };
}