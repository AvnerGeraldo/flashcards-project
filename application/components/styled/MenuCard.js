import React from 'react'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

//Components
import Card from './Card'

const MenuCard = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;  
    background-color: #ADD8E6;    
`

const Title = styled.Text`
    color: #FFFF00;
    font-size: 16;
`

export default ({ title, nameIcon }) => (
    <MenuCard>
        <Card>
            <Title>{title}</Title>
        </Card>
    </MenuCard>
)