import React from 'react';

import styles from './Header.module.css'

interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
    return (
        <header
            className={styles.header}>
            <h1>{title}</h1>
        </header>
    )
}



export default Header