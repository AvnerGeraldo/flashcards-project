import React from 'react'
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: stretch;
`

const ContentScore = styled.View`
    padding: 10px 25px;
    background-color: #FFF;
    border: 2px solid #000;    
    border-radius: 20px;
    box-shadow: 5px 4px 4px #000;
    margin: 10px;
`

export default ({ children }) => (
    <Container>
        <ContentScore>
            {children}
        </ContentScore>
    </Container>
)