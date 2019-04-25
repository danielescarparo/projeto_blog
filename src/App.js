import React, { Component } from 'react';
import {NavLink as Link} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">        
          <h1 className="titulo"> Bloguinho</h1>
          <div className="opcoes">
            <Link to="/opcao1">opcao1</Link>
            <Link to="/opcao2">opcao2</Link>
          </div>
          <div>
        </div>
      </div>
      </div>  
    );
  }
}

export default App;
