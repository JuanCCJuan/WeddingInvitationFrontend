/* DEPENDENCIES */
import { type JSX } from "react";
import { Routes, Route } from "react-router";

/* COMPONENTS */
import { Error } from "../components/ui";
import { Dashboard } from "../features/dashboard/pages/Dashboard";
import { Invitation } from "../features/user/pages/Invitation/Invitation";

export const App = (): JSX.Element => {
    const errorMessage: string = "No existe la dirección URL ingresada";
    
    return (
        <Routes>
            <Route path="*" element={ <Error message={ errorMessage } /> } />
            <Route path="/invitaciones/:id" element={ <Invitation /> } />
            <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
    );
}