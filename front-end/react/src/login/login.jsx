import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import styles from './login.module.css';
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


const Login = () => {
    const [usuario, setusuario] = useState('');
    const [senha, setsenha] = useState('');

    return (
        <form className={styles.login}>
            <FaUserCircle />
            <TextField label="Username" type="text" value={usuario} onChange={(e) => setusuario(e.target.value)} fullWidth margin="normal" />
            <RiLockPasswordFill />
            <TextField label="password" type="password" value={senha} onChange={(e) => setsenha(e.target.value)} fullWidth margin="normal" />
            <Button variant="contained" color="success" type="submit">Login</Button>
            <br/>
            <a href="">Don't Have an Account?</a>
            <br/>
            <a href="">Forgot Password</a>
            
        </form>


    );

}

export default Login;