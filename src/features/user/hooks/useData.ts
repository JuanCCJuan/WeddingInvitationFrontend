/* DEPENDENCIES */
import { useEffect } from "react";
import { useParams } from "react-router";
import { useInvitationContext } from "./useInvitationContext";
import { type UserInvitation } from "../../../types/UserInvitation";

export const useData = () => {
    // Obtiene el ID de los parametros
    const { id } = useParams();

    const {
        isError, 
        isLoading, 
        invitation, 
        setIsError, 
        setIsLoading, 
        setInvitation, 
    } = useInvitationContext();
    
    useEffect(() => {
        if (!id) {
            setIsError(true);
            setIsLoading(false);
    
            return;
        }

        setIsError(false);
        setIsLoading(true);

        const fetchInvitation = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/invitations/${id}`);

                if(!response.ok) {
                    throw new Error(response.statusText);
                }

                const invitationData: UserInvitation = await response.json();

                setInvitation(invitationData);
            } catch(error){
                console.error((error as Error).message);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchInvitation();
    }, [id]);

    return {
        isError, 
        isLoading, 
        invitation, 
    }
}