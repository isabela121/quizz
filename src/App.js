import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Inicio from './Home/Inicio'
import Categorias from './Jogo/Categorias'
import Perguntas from './Jogo/Perguntas'
import Resultad from './Jogo/Resultad'
import Categoria from './Jogo/Categoria'
import Ranking from './Jogo/Ranking'
import Navegacao from './Home/Navegacao'


class App extends Component {
  render (){
    return (

      <BrowserRouter>
            <div className="App">
              
                <Route path='/' exact component={Inicio} />
                <Route path='/categorias' component={Categorias} />
                <Route path='/perguntas' component={Perguntas} />
                <Route path='/resultad' component={Resultad} />
                <Route path='/ranking' component={Ranking} />
                <Route path='/navegacao' component={Navegacao} />

            </div>
      </BrowserRouter>

    );
  }
}

export default App;
