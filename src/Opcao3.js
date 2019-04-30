import React, { Component } from 'react';
import axios from 'axios'

import './Opcao3.css';

class Opcao3 extends Component {
  state = {
    texto: {}
  }

  componentDidMount(){
    axios.get('http://private-22d7fa-danielecristinascarparo.apiary-mock.com/textos/1')
    .then((response) => {
      this.setState({ texto: response.data });
    })
    .catch((error) => {
      console.log(error);
    });

    // axios.get('http://private-22d7fa-danielecristinascarparo.apiary-mock.com/textos/2')
    // .then((response) => {
    //   this.setState({ texto: response.data });
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  
  render() {
    return (
      <div>         
          <h3>{this.state.texto.Nome}</h3>
          <span>{this.state.texto.Autor}</span>
          <p>{this.state.texto.Descricao}</p>
          <span>{this.state.texto.Conteudo}</span>
      </div>  
    );
  }
}

export default Opcao3;