import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import styles from './form.module.css';



const Formulario = () => {
    const [nome, setnome] = useState('');
    const [email, setemail] = useState('');
    const [senha, setsenha] = useState('');
    const [cpfoucnpj, setcpfoucnpj] = useState('');

    const validarDados = () => {
        if (!nome || !email || !senha || !cpfoucnpj) {
            alert('Preencha todos os campos!');
            return;
        }
        alert('Dados válidos!');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validarDados();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <TextField
                label="Nome Completo:"
                required={true}
                type="text"
                value={nome}
                onChange={(e) => setnome(e.target.value)}
                fullWidth
                margin="normal"

            />
            <TextField
                label="Seu Email:"
                required={true}
                value={email}
                onChange={(e) => setemail(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Sua Senha:"
                required={true}
                type="password"
                value={senha}
                onChange={(e) => setsenha(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="CPF ou CNPJ:"
                required={true}
                type="number"
                value={cpfoucnpj}
                onChange={(e) => setcpfoucnpj(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button
                variant="contained"
                color="success"
                type="submit"
                onClick={validarDados}
            >
                INSCREVA-SE
            </Button>
        </form>
    );
};

export default Formulario;
