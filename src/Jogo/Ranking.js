import React, { Component } from 'react'
import {List, Container, Image } from 'semantic-ui-react'

import Usuario from './Usuario'

class Ranking extends Component{
    render(){
        return(

            <div>
                <h2>RANKING</h2>
                <p>Quem é o Mestre?</p>

                <Container>
                    <List divided verticalAlign='left'>
                        <Usuario 
                                foto= ' ' 
                                nome='Isabela Santos' 
                                pontos='100' /> 

                        <Usuario 
                                foto= ' ' 
                                nome='André Nascimento' 
                                pontos='85' /> 

                        <Usuario 
                                foto= ' ' 
                                nome='Anonimo' 
                                pontos='50' /> 
                    </List>
                </Container>

            </div>

        )
    }
}

export default Ranking