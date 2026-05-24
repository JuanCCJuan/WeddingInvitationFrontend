/* DEPENDENCIES */
import { type ReactNode, type JSX, useState } from "react";
import { InvitationContext } from "../hooks/useInvitationContext";
import { type UserInvitation } from "../../../types/UserInvitation";

interface Props {
    children: ReactNode;
}

export const InvitationProvider = ({ children }: Props): JSX.Element => {
    // Estados para la invitacion, el error y la carga
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [invitation, setInvitation] = useState<UserInvitation | null>(null);

    return (
        <InvitationContext.Provider value={{ isError, setIsError, isLoading, setIsLoading, invitation, setInvitation }}>
            { children }
        </InvitationContext.Provider>
    );
}