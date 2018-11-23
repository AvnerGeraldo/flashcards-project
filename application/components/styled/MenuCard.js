import React from 'react'
import styled from 'styled-components'
import { FontAwesome } from '@expo/vector-icons'

//Components
import Card from './Card'
const Title = styled.Text`
    color: #FFFF00;
    font-size: 16;
`

export default ({ title, nameIcon }) => (
    <Card>
        {nameIcon && <FontAwesome name={nameIcon} size={30} color='black' />}
        <Title>{title}</Title>
    </Card>
)