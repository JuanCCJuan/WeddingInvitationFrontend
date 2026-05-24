/* STYLES */
import styles from "./Confirmation.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";

/* COMPONENTS */
import { Divisor } from "../";
import { useConfirmation } from "./useConfirmation";

export const Confirmation = (): JSX.Element => {
    const { isPending, handleShowCancel, handleShowConfirm } = useConfirmation();

    return (
        <>
            <Divisor position="top" />

            <section className={ `center ${styles.confirmation}` }>
                {
                    isPending ? 
                    <h3 className={ styles.confirmation__title }>
                        <span className={ styles.title__letter }>C</span>onfirmar asistencia
                    </h3> :
                    <h3 className={ styles.confirmation__title }>
                        <span className={ styles.title__letter }>C</span>ancelar asistencia
                    </h3>
                }
                
                {
                    isPending && 
                    <p>
                        Nos ayudaría mucho que puedas confirmar tu asistencia antes del <strong>23 de agosto</strong>.
                    </p>
                }

                <p>
                    En caso de que no te sea posible acompañarnos, te agradeceremos también cancelar 
                    tu asistencia para poder organizar todo de la mejor manera.
                </p>

                <div className={ `center ${styles.confirmation__actions}` }>
                    {
                        isPending && 
                        <button className={ styles.action } type="button" onClick={ handleShowConfirm }>
                            Confirmar
                        </button>
                    }
                    
                    <button className={ styles.action } type="button" onClick={ handleShowCancel }>
                        No podré asisir
                    </button>
                </div>
            </section>

            <Divisor position="bottom" />
        </>
    );
}