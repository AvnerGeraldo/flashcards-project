import React from 'react';
import { Provider } from 'react-redux'

//Store
import store from '@application/store'
//Components
import Application from '@application'

export default () => (
  <Provider store={store}>
    <Application />
  </Provider>
)
