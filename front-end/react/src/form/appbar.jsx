import React, { useState } from "react";
import styles from './appBar.module.css';

const AppBar = () => {
return (
<div className={styles.appBar}>
    <h1>Crie sua conta!</h1>
    <p>Ja tem registro? <a className={styles.link}href="#">Faça Login</a></p>
</div>
);

}

export default AppBar;