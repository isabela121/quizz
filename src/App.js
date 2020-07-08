import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Inicio from './Home/Inicio'
import Categorias from './Jogo/Categorias'
import Perguntas from './Jogo/Perguntas'
import Resultad from './Jogo/Resultad';
import Categoria from './Jogo/Categoria';
import Ranking from './Jogo/Ranking';
import Header from './Jogo/Header';

class App extends Component {
  render (){
    return (

<BrowserRouter>
      <div className="App">
        <header clasName="App-header">
          <Header />
          <h1 className="App-title">Jogo de Perguntas e Respostas</h1> <br></br>
        </header>
          <Route path='/' exact component={Inicio} />
          <Route path='/categorias' component={Categorias} />
          <Route path='/perguntas' component={Perguntas} />
          <Route path='/resultad' component={Resultad} />
          <Route path='/ranking' component={Ranking} />

      </div>
 </BrowserRouter>
    );
  }
}

export default App;
