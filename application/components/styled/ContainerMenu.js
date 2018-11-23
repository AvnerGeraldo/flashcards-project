import React from 'react'
import styled from 'styled-components'
import { Constants } from 'expo'

const ContainerMenu = styled.View`    
    flex: 1;
    flex-direction: row;
    padding-top: ${Constants.statusBarHeight + 5};
    padding-left: 10;
    padding-right: 10;
    padding-bottom: 10;
    align-items: stretch;
`

export default (props) => (
    <ContainerMenu>
        {props.children}
    </ContainerMenu>
)