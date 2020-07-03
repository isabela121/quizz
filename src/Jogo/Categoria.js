import React from'react'
import {Grid, Segment, Header } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react' 


const tamanho = {
    width:175,
    height:175
}

const Categoria = props =>{
    return (

        <Grid.Column>
            <Segment circular style={tamanho}>
                <Header as='h2'>
                        <Header.Subheader> 
                        <Icon name={props.icone} size='big'></Icon> 
                        </Header.Subheader>
                        {props.titulo}
                </Header>
            </Segment>
        </Grid.Column> 

    )
}
export default Categoria