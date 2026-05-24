/* DEPENDENCIES */
import { type UserInvitation } from "../../../types/UserInvitation";
import { type Dispatch, type SetStateAction, createContext, useContext } from "react";

export interface InvitationContent {
    isError: boolean;
    setIsError: Dispatch<SetStateAction<boolean>>;

    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    
    invitation: UserInvitation | null;
    setInvitation: Dispatch<SetStateAction<UserInvitation | null>>;
}

// Crea el contexto de la invitacion
export const InvitationContext = createContext<InvitationContent | null>(null);

export const useInvitationContext = (): InvitationContent => {
    const context = useContext<InvitationContent | null>(InvitationContext);

    if (!context) {
        throw new Error("useInvitation debe usarse dentro de InvitationProvider");
    }

    return context;
}