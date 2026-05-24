/* DEPENDENCIES */
import { useState, useMemo } from "react";
import { useInfo } from "../hooks/useInfo";
import { type Status } from "../../../types/UserInvitation";

export type FilterName = Status | "ALL";

const FILTERS: readonly { label: string; value: FilterName }[] = [
    { label: "Todas", value: "ALL" },
    { label: "Pendientes", value: "PENDING" },
    { label: "Aceptadas", value: "ACCEPTED" },
    { label: "Canceladas", value: "CANCELED" },
];

export const useDashboard = () => {
    const { isError, isLoading, invitations } = useInfo();
    const [filterName, setFilterName] = useState<FilterName>("ALL");
    
    // Obtiene la lista filtrada de elementos
    const filteredInvitations = useMemo(() => {
        if (filterName === "ALL") return invitations;
        return invitations.filter((inv) => inv.status === filterName);
    }, [invitations, filterName]);

    return {
        FILTERS, 
        isError, 
        isLoading, 
        filterName, 
        invitations, 
        setFilterName, 
        filteredInvitations, 
    };
}