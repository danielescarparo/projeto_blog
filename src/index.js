import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Opcao1 from './Opcao1';
import Opcao2 from './Opcao2';
import Opcao3 from './Opcao3';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
<BrowserRouter> {/*englobar rotas */}
    <App/>
    <Switch>
        <Route exact path="/" component={Opcao1}/>
        <Route exact path="/opcao1" component={Opcao1}/>
        <Route exact path="/opcao2" component={Opcao2}/>
        <Route exact path="/opcao2/:id" component={Opcao3}/>
    </Switch> 
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
