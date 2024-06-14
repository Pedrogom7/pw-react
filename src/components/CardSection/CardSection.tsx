import React from "react";
import styles from './CardSection.module.css'

interface CardSectionProps {
    titulo: string;
    children: React.ReactNode;
}

function CardSection({ titulo, children }: CardSectionProps) {
    return (
        <section
            className={styles.cards}>
            <h2
                className={styles.titulo}>{titulo}</h2>
            <div
                className={styles.conteudo}>
                {children}
            </div>
        </section>
    )
}

export default CardSection