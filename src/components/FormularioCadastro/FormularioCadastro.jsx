import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core"

export default function FormularioCadastro() {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCPF] = useState("")

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log(nome)
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    let tempNome = event.target.value
                    if (tempNome.length >= 3)
                        tempNome = tempNome.substr(0, 3)

                    setNome(tempNome)
                }}
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCPF(event.target.value)
                }}
                id="CPF"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                control={<Switch defaultChecked={true} name="promocoes" color="primary" />}
                label="Promoções"
            />
            <FormControlLabel
                control={<Switch defaultChecked={true} name="novidades" color="primary" />}
                label="Novidades"
            />

            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>

        </form>
    )
}