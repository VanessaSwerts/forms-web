import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro"
import { Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1> Formulário de Cadastro</h1 >
        <FormularioCadastro />
      </Fragment>
    );
  }
}

export default App;
