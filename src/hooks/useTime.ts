/* DEPENDENCIES */
import { useState, useEffect } from "react";

// Fecha de inicializacion
const initialTime: number = Date.now();

export const useTime = (finalTime: number) => {
    // Estado para el tiempo
    const [currentTime, setCurrentTime] = useState<number>(initialTime);

    // Diferencia entre la fecha final y la actual
    const offset = Math.max(finalTime - currentTime, 0);

    useEffect(() => {
        if(offset === 0) return;

        const interval = setInterval(() => {
            const time: number = Date.now();
            setCurrentTime(time);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [offset]);

    const days = Math.floor(offset / 86400000);
    const seconds = Math.floor(offset / 1000) % 60;
    const hours = Math.floor(offset / 3600000) % 24;
    const minutes = Math.floor(offset / 60000) % 60;

    return {
        days, 
        hours, 
        offset, 
        minutes, 
        seconds, 
    };
}