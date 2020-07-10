import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Image} from 'semantic-ui-react'

const Header = props => {
    return (

<div>  
        <Menu>
            <Menu.Item><strong>Quiz</strong></Menu.Item>
            <Menu.Item as={Link} to='/'>Home</Menu.Item>
            <Menu.Item as={Link} to='/categorias'>Categorias</Menu.Item>
            <Menu.Item as={Link} to='/perguntas'>Perguntas</Menu.Item>
             <Menu.Item as={Link} to='/resultad'>Resultad</Menu.Item>
            <Menu.Item as={Link} to='/ranking'>Ranking</Menu.Item>
            <Menu.Menu position='right'>
            <Menu.Item><Image avatar src=''> Isabela Santos</Image></Menu.Item>
            </Menu.Menu>
       </Menu>
</div>
    )
}

export default Header