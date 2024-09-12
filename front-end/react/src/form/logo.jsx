import logo from './img/logo-bege.jpg'
import React, { useState } from "react";
import styles from './logo.module.css';


const Logo = () => {
    return (
        <div className=''>
            <img className={styles.logo}src={logo} alt="" />
        </div>
    );
}

export default Logo;