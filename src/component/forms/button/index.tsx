"use client"
import styles from './index.module.css';

export default function Button({
    label,
    type="submit",
    onClick
}:{
    label: string;
    type?: "submit";
    onClick: () => void
}){
    return (
        <>
            <button type={type} onClick={onClick} className={styles.button}>
                {label}
            </button>
        </>
    )
}