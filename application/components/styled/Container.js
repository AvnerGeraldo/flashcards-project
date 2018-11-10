import React from 'react'
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
`

export default (props) => (
    <Container>
        {props.children}
    </Container>
)