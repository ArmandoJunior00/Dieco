import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import styles from './form.module.css';


const Formulario = () => {
    const [nome, setnome] = useState('');
    const [email, setemail] = useState('');
    const [senha, setsenha] = useState('');
    const [cpfoucnpj, setcpfoucnpj] = useState('');

    return (
        <form className={styles.form}>
            <TextField label="Nome Completo:" value={nome} onChange={(e) => setnome(e.target.value)} fullWidth margin="normal" />
            <TextField label="Seu Email:" value={email} onChange={(e) => setemail(e.target.value)} fullWidth margin="normal" />
            <TextField label="Sua Senha:" type="password" value={senha} onChange={(e) => setsenha(e.target.value)} fullWidth margin="normal" />
            <TextField label="CPF ou CNPJ:" value={cpfoucnpj} onChange={(e) => setcpfoucnpj(e.target.value)} fullWidth margin="normal" />
            <Button variant="contained" color="success" type="submit">INSCREVA-SE</Button>
        </form>
    );
}

export default Formulario;