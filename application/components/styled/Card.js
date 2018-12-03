import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components'

const ContainerCard = styled.View`
    flex: 1;
    margin: 30px 20px 10px;
    padding: 5px;    
    border: 2px solid #000;    
    border-radius: 20px;
    box-shadow: 5px 4px 4px #000;
    ${props => props.backgroundImage ? `background-image: url(${props.backgroundImage})` : 'background-color: #FFF'};
`

const Card = styled.View`
    flex: 1;
    border-radius: 20px;
    justify-content: center;        
    background: rgba(248, 248, 255, 0.7);
`
//#F8F8FF
export default ({ children }) => (
    <ContainerCard>
        <Card>
            {children}
        </Card>        
    </ContainerCard>
)