import React from 'react';
import { Provider } from 'react-redux'

//Store
import store from '@application/store'
//Components
import Container from '@styled-components/Container'
import Application from '@application'

export default () => (
  <Provider store={store}>
    <Container>
      <Application />
    </Container>
  </Provider>
)
