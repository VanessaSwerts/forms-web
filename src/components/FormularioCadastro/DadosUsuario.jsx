import React, { useState, useContext } from 'react'
import { Button, TextField } from "@material-ui/core"
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"


export default function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erros, setErros] = useState({ senha: { valido: true, texto: "" } })

    const validacao = useContext(ValidacoesCadastro)

    function validarCampos(event) {
        const { name, value } = event.target
        const novoEstado = { ...erros }
        novoEstado[name] = validacao[name](value)
        setErros(novoEstado)
    }

    function possoEnviar() {
        for (let campo in erros) {
            if (!erros[campo].valido)
                return false
        }
        return true
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (possoEnviar())
                aoEnviar({ email, senha });
        }}>
            <TextField
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email"
                label="E-mail"
                name="email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                name="senha"
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