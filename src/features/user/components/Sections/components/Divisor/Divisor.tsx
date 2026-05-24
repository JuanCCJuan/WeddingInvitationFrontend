/* STYLES */
import styles from "./Divisor.module.css";

/* DEPENDENCIES */
import { type JSX } from "react";

interface Props {
    position: "top" | "bottom";
}

export const Divisor = ({ position }: Props): JSX.Element => (
    <img 
        alt="Divisor" 
        src="/assets/shared/divisor.webp" 
        className={ `image ${styles[`divisor--${position}`]}` } 
    />
)