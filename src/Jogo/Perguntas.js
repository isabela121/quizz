import React from 'react'
import { Grid, Radio, Button, Message } from 'semantic-ui-react' 
    


const Perguntas = props => {
return(

    <div>
        <h2>Perguntas sobe Profissões</h2>
        <h2>Mostre que você conhece tudo sobre este assunto</h2>

<span>
        <h3>Pergunta: Qual a profissão que você deseja?</h3>
    
        <Grid columns={2} divided>
            <Grid.Row>
            <Grid.Column>
                <Message color='yellow'><p>Alternativa 1</p>
                <Radio toggle />
                </Message>   
            </Grid.Column>

            <Grid.Column>
                <Message color='teal'><p>Alternativa 2</p>
                <Radio toggle />
                </Message>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
               <Message color='pink'><p>Alternativa 3</p>
               <Radio toggle />
               </Message> 
            </Grid.Column>

            <Grid.Column>
               <Message color='brown'><p>Alternativa 4</p>
               <Radio toggle />
               </Message> 
            </Grid.Column>
        </Grid.Row>
        </Grid>
        </span>  <br></br>
        <Button>Finalizar</Button>
       
    </div>
    
)

}

export default Perguntas