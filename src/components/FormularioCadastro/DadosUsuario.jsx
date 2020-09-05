import React, { useState } from 'react'
import { Button, TextField } from "@material-ui/core"


export default function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar({email, senha});
        }}>
            <TextField
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email"
                label="E-mail"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                id="senha"
                label="Senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <Button variant="contained" color="primary" type="submit">Próximo</Button>
        </form>
    )
}