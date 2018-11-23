import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components'

const Card = styled.View`
    flex: 1;
    width: ${Dimensions.get('window').width - 20}
    border: 2px solid black;
    background-color: #FFF;
`

export default ({ children }) => (
    <Card>
        {children}
    </Card>
)