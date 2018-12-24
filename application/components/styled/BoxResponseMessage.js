import React from 'react'
import styled from 'styled-components'

const BoxResponseMessage = styled.View`    
    padding: 10px 20px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-color: ${({ borderColor }) => borderColor};
    margin-top: 24.4px;
`
const Text = styled.Text`
    color: ${({ color }) => color};
    text-align: center;
`

export default ({ children, typeAlert, textToShow }) => {
    let backgroundColor, borderColor, color

    switch(typeAlert) {
        case 'danger':
            backgroundColor = '#f2dede'
            borderColor = '#ebccd1'
            color = '#a94442'
            break;
        case 'warning':
            backgroundColor = '#fcf8e3'
            borderColor = '#faebcc'
            color = '#8a6d3b'
            break;
        default:
            //Success
            backgroundColor = '#dff0d8'
            borderColor = '#d6e9c6'
            color = '#3c763d'
    }
    
    return (
    <BoxResponseMessage
        backgroundColor={backgroundColor}
        borderColor={borderColor}><Text color={color}>{textToShow}</Text></BoxResponseMessage>)
        
}