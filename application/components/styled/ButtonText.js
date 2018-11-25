import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonText = styled.Text`
    color: ${({ colorText }) => colorText || `#000`};
    font-weight: bold;
`
const { string } = PropTypes

ButtonText.propTypes = {
    colorText: string
}

export default ButtonText