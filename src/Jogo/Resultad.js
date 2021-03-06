import React, { Component } from 'react'
import {List, Container } from 'semantic-ui-react'

import Navegacao from './Navegacao'
import Resposta from './Resposta'


const resposta = {
    id: 1, 
    titulo: 'Primeira Pergunta',
    alternativa: 3
}

class Resultad extends Component {
    render(){
        return(
            <div>
            <Navegacao />
                <h2>Seus resultados</h2>
                <p> Confira o seu desempenho nesta categoria</p>

                <Container>
                    <List divided verticalAlign='left'>
                        <Resposta resposta={resposta}/>
                    </List>
                </Container>
            </div>

        )   

    }

}

export default Resultad