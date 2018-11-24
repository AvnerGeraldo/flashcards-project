import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components'

const ContainerCard = styled.View`
    flex: 1;
    margin: 30px 20px 10px;
    padding: 30px;    
    border: 2px solid black;
    ${props => props.backgroundImage ? `background-image: url(${props.backgroundImage})` : 'background-color: #FFF;'}    
    width: ${Dimensions.get('window').width -40}
    box-shadow: 5px 4px 4px #000;
    border-radius: 20px;
`

const Card = styled.View`
    flex: 1;
    padding: 15px;
    background-color: #F8F8FF;
    border-radius: 20px;
    justify-content: center;
    align-items: center;    
    background: rgba(248, 248, 255, 0.7);
`

export default ({ children }) => (
    <ContainerCard>
        <Card>
            {children}
        </Card>        
    </ContainerCard>
)