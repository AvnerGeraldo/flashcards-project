import { combineReducers } from 'redux'

//Reducers
import deckReducer from './deck'
import playCardsReducer from './playCards'

export default combineReducers({ deck: deckReducer, playCards: playCardsReducer })