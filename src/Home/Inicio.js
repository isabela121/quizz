import React from 'react'
import { Container, Header, Segment, Card, buttom } from 'semantic-ui-react'


const Inicio = props => {
    return(
        <div>
            <Container>

                <Segment pilled>
                    Quiz
                </Segment>

                <Header as='h2'> 
                Jogo de perguntas e respostas
                </Header>

                <p>Desafie os seus amigos incríveis</p>

                <Card fluid>
                    <Card.Content>
                        Acesse agora mesmo
                    </Card.Content>
                    
                    <Card.Content>
                    <buttom basic color='blue'>Login com Facebook</buttom> <br></br>
                    </Card.Content>
                
                    <Card.Content>
                    <buttom basic color='green'>Usuário Administrativo</buttom>
                    </Card.Content>
                </Card>

            </Container>
        </div>

    )
}

export default Inicio