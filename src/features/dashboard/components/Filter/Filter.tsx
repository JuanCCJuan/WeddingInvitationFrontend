/* STYLES */
import styles from "./Filter.module.css";

/* DEPENDENCIES */
import { type FilterName } from "../../pages/useDashboard";
import { type Dispatch, type JSX, type SetStateAction } from "react";

interface Props {
    content: string;
    name: FilterName;
    filterName: FilterName;
    setFilterName: Dispatch<SetStateAction<FilterName>>;
}

export const Filter = ({ name, content, filterName, setFilterName }: Props): JSX.Element => {
    const isSelected = filterName === name;

    return (
        <button
            onClick={() => setFilterName(name)}
            className={`${styles.filter} ${isSelected ? styles["filter--selected"] : ""}`}
        >{ content }
        </button>
    );
};