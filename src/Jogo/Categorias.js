import React, {Component} from 'react'
import {Grid } from 'semantic-ui-react'

import Navegacao from './Navegacao'
import Categoria from './Categoria'
    

class Categorias extends Component {

    render(){
        return(
        <div>
            <Navegacao />
                <h2>Lista de Categorias</h2>
                <p>Selecione a categoria que você quer responder perguntas</p>

                <Grid columns={5} divided>
                    <Categoria titulo='Futebol' icone='futbol outline' />
                    <Categoria titulo='Fórmula 1' icone='trophy' />
                    <Categoria titulo='Musica' icone='music' />
                    <Categoria titulo='Mundo' icone='globe' />
                    <Categoria titulo='Animais' icone='paw' />
                    <Categoria titulo='Brincadeiras' icone='puzzle piece' />
                    <Categoria titulo='Profissões' icone='user md' />
                </Grid>
        </div>
        )
    }
}


export default Categorias