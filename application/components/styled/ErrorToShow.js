import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ErrorContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const TextError = styled.Text`
    color: #FF0000;
    font-size: 18px;
`

const ErrorToShow = ({ textError }) => (
    <ErrorContainer>
        <TextError>Error: {textError}</TextError>
    </ErrorContainer>
)

const { string } = PropTypes

ErrorToShow.propTypes = {
    textError: string.isRequired
}

export default ErrorToShow