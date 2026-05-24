/* DEPENDENCIES */
import { useState, type JSX, type ReactNode } from "react";
import { type PopupState, PopupContext } from "../hooks/usePopupContext";

interface Props {
    children: ReactNode;
}

export const PopupProvider = ({ children }: Props): JSX.Element => {
    // Estado para la visualizacion del popup de confirmacion-cancelacion
    const [popupState, setPopupState] = useState<PopupState>({
        showCancelPopup: false, 
        showConfirmPopup: false, 
    });

    return (
        <PopupContext.Provider value={{ popupState, setPopupState }}>
            { children }
        </PopupContext.Provider>
    );
}