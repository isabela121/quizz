import React from 'react'
import {List, Label, } from 'semantic-ui-react'


const Resposta = props => {
    const {id, titulo, alterantiva} = props.resposta
    return(

        <List.Item>

                <List.Content floated='left'>
                <Label> 
                    {id}
                </Label>
                    {titulo}
                </List.Content>
                <List.Content floated='right'>
                    {alterantiva}
                </List.Content>

        </List.Item>
    )
}


export default Resposta