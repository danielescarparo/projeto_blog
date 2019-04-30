import React, { Component } from 'react';
import {NavLink as Link} from 'react-router-dom'
import axios from 'axios'

import './Opcao2.css';

class Opcao2 extends Component {

  state = {
    lista: [],
  }

  componentDidMount(){
    axios.get('http://private-22d7fa-danielecristinascarparo.apiary-mock.com/textos')
    .then((response) => {
      this.setState({ lista: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  funcao = () => {
    const elementos = [];
    for(let index in this.state.lista){
      elementos.push(<Link key={this.state.lista[index].ID} className="rectangle" to={`/opcao2/${this.state.lista[index].ID}`}>{this.state.lista[index].Nome}</Link>)
    }
  }

  render() {
    return (
      <div className="group-rec">
        {this.funcao}
      </div>  
    );
  }
}

export default Opcao2;
