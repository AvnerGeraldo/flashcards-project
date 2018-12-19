import { combineReducers } from 'redux'

//Reducers
import decksReducer from './decks'
import deckReducer from './deck'

export default combineReducers({ 
    listDecks: decksReducer, 
    deck: deckReducer 
})