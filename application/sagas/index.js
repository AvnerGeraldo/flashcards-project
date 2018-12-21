import { all } from 'redux-saga/effects'

//Deck
import watchInitialData from './Deck/getInitialData'
import watchGetDecks from './Deck/getDecks'
import watchGetDeck from './Deck/getDeck'
import watchSaveDeckTitle from './Deck/saveDeck'

//Answer
import watchSaveAnswer from './Deck/saveAnswerOnDeck'

//Export data
export default function* () {
    yield all([
        watchInitialData(),
        watchGetDecks(),
        watchGetDeck(),
        watchSaveAnswer(),
        watchSaveDeckTitle(),
    ])
}