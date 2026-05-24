/* DEPENDENCIES */
import { createContext, useContext } from "react";
import { type Dispatch, type SetStateAction } from "react";

export interface PopupState {
    showCancelPopup: boolean;
    showConfirmPopup: boolean;
}

interface ContextContent {
    popupState: PopupState;
    setPopupState: Dispatch<SetStateAction<PopupState>>;
}

export const PopupContext = createContext<ContextContent | null>(null);

export const usePopupContext = () => {
    const context = useContext<ContextContent | null>(PopupContext);

    if(!context) {
        throw new Error("usePopupContext debe usarse dentro de PopupProvider");
    }

    return context;
}