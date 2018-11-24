import { all } from 'redux-saga/effects'

//Deck
import watchInitialData from './Deck/getInitialData'
import watchGetDecks from './Deck/getDecks'

//Export data
export default function* () {
    yield all([
        watchInitialData(),
        watchGetDecks(),
    ])
}