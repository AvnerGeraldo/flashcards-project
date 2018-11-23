import React, { Component } from 'react'

//Component
import ContainerMenu from '@styled-components/ContainerMenu'
import MenuCard from '@styled-components/MenuCard'

class Menu extends Component {

    render() {

        return (
            <ContainerMenu>
                <MenuCard title='Decks' />
                <MenuCard title='New Deck' />
            </ContainerMenu>
        )
    }
}

export default Menu
