import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FlipCardFront = styled.View`
    backface-visibility: 'hidden';
    opacity: ${({ opacity }) => opacity};
`

const FlipCardBack = styled.View`
    backface-visibility: 'hidden';
    position: 'absolute';
    top: 0;
    opacity: ${({ opacity }) => opacity};
`
const FlipCardFrontBack = ({ children, faceCard, frontOpacity, backOpacity, transform }) => {
    let ComponentToRender = FlipCardFront
    let opacity = frontOpacity

    if (faceCard === 'back') {
        ComponentToRender = FlipCardBack
        opacity = backOpacity
    }

    return (
        <ComponentToRender opacity={opacity} style={transform}>
            {children}
        </ComponentToRender>
    )
}

const { object, string } = PropTypes

FlipCardFrontBack.propTypes = {
    children: object,
    faceCard: string,
    frontOpacity: object, 
    backOpacity: object, 
    transform: object,
}

export default FlipCardFrontBack