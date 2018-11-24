import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

//Reducer
import reducer from '@reducers'

//Saga
import rootSaga from '@sagas'

//Create Middleware Sagas
const sagaMiddleware = createSagaMiddleware()

//Store
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)))

//Run sagas
sagaMiddleware.run(rootSaga)

export default store