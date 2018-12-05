import { combineReducers } from 'redux'

//Reducers
import deckReducer from './deck'

export default combineReducers({ deck: deckReducer })