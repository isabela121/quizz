import React from 'react'
import {Menu, Dropdown} from 'semantic-ui-react'

const Navegacao = props => {
    return(
<div>
    <header clasName="App-header" style={{ background: 'Gainsboro', width: '137rem', height: '10rem' }}>
        <h1 className="App-title">Jogo de Perguntas e Respostas</h1>
           
            <Menu>
                <Menu.Item className="hom" style={{background: 'Gainsboro', position: 'relative', }}><strong></strong></Menu.Item>
                <Menu.Item>Home</Menu.Item>
                <Menu.Menu position='right'>
                    <Dropdown item text='Acese aqui'>  
                        <Dropdown.Menu>
                            <Dropdown.Item>Facebook</Dropdown.Item>
                            <Dropdown.Item>Twitter</Dropdown.Item>
                            <Dropdown.Item>Admin</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>

    </header>
</div>

    )
}

export default Navegacao