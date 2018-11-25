import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonCard = styled.TouchableOpacity`
    background: ${({ backgroundColor }) => backgroundColor || `transparent`};
    border: 2px solid ${({ borderColor }) => borderColor || `#000`};
    margin-top: 20;
    padding: 20px 50px;
    border-radius: 15px;
`

const { string } = PropTypes

ButtonCard.propTypes = {
    backgroundColor: string,
    borderColor: string
}

export default ButtonCard