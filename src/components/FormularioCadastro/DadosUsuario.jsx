import React from 'react'
import { Button, TextField } from "@material-ui/core"


export default function DadosUsuario() {
    return (
        <form>
            <TextField
                id="email"
                label="E-mail"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                id="senha"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
    )
}