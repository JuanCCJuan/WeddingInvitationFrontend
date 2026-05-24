/* STYLES */
import styles from "./RemainingTime.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";
import { useTime } from ".././../../../../../../../hooks/useTime";

interface PortionProps {
    name: string;
    value: number;
}

const Portion = ({ name, value }: PortionProps): JSX.Element => {
    return (
        <div className={ styles.portion }>
            <span className={ styles.portion__value }>{ value.toString().padStart(2, "0") }</span><br />
            { (value === 1) ? name : `${name}s` }
        </div>
    );
}

// El formato que debe llevar el constructor Date para 'finalTime' se puede obtener en el siguiente enlace: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format
const finalTime: number = new Date("2026-09-06T17:00:00.000-06:00").getTime();

export const RemainingTime = (): JSX.Element => {
    // Obtiene el tiempo restante
    const { days, hours, minutes, seconds } = useTime(finalTime);

    return (
        <div className="center">
            <Portion name="Día" value={ days } />
            <Portion name="Hora" value={ hours } />
            <Portion name="Minuto" value={ minutes } />
            <Portion name="Segundo" value={ seconds } />
        </div>
    );
}