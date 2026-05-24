/* STYLES */
import styles from "./Dashboard.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";
import { useDashboard } from "./useDashboard";

/* COMPONENTS */
import { Filter, InvitationItem } from "../components";
import { Error, Loading } from "../../../components/ui";

export const Dashboard = (): JSX.Element => {
    const {
        FILTERS, 
        isError, 
        isLoading,
        filterName, 
        invitations, 
        setFilterName, 
        filteredInvitations, 
    } = useDashboard();

    if (isLoading) return <Loading />;

    if (isError || !invitations) {
        const errorMessage: string = "Ha ocurrido un error al tratar de obtener las invitaciones."

        return (
            <Error message={ errorMessage } />
        );
    }

    return (
        <div className={ styles.dashboard }>
            <h1 className={ styles.dashboard__title }>Invitaciones</h1>

            <div className={ styles.dashboard__content }>
                <div className={ styles.dashboard__filters }>
                    {
                        FILTERS.map(({ label, value }) => (
                            <Filter
                                key={value}
                                name={value}
                                content={label}
                                filterName={ filterName }
                                setFilterName={setFilterName}
                            />
                        ))
                    }
                </div>

                <ol className={ `center ${styles.content__list}` }>
                    {
                        filteredInvitations.length === 0 ? 
                        (
                            <strong className={ styles.empty }>
                                No hay invitaciones con este estado.
                            </strong>
                        ) : 
                        (
                            filteredInvitations.map(invitation => (
                                <InvitationItem
                                    { ...invitation } 
                                    key={ invitation._id } 
                                />
                            ))
                        )
                    }
                </ol>
            </div>
        </div>
    );
};