import React from 'react';
import { Text } from 'react-native'
import Container from '@styled-components/Container'

//API
import * as api from '@api'

//Routes
import Route from '@routes'

//api.setInitialData().then(res => console.log(res))
/*
api.getDecks().then(res => console.log(res))
api.getDeck('JavaScript').then(res => console.log(res))
*/
//api.saveDeckTitle('Teste')//.then(res => console.log(res))
//.then(res => api.getDecks().then(res => console.log(res)))
/*api.saveDeckTitle('Teste')
  .then(res => 
      api.addCardToDeck('Teste', {
        question: 'What is React?2222',
        answer: 'A library for managing useraaaaa interfaces'
      }
    )
    .then(res => 
      api.getDecks()
        .then(res => console.log(res))
    )
  )
  */

export default () => (
  <Container>
    <Route />
  </Container>
)
