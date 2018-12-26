import { SAVE_DECK_ASYNC, ERROR_DECKS_ASYNC } from '@actions'
import { SAVE_DECK } from '@actions/saga-actions'
import { takeLatest, put } from 'redux-saga/effects'
import { saveDeckTitle } from '@api'

function* saveDeck({ payload: { resolve, reject, title }}) {
    try {
        const response = yield saveDeckTitle(title)
        
        if (response.error) {
            throw new Error(response.error)
        }

        if (!response.save) {
            throw new Error('Error: Could not save the deck. Please try again another time!')
        }
        
        //Response data
        yield put({
            type: SAVE_DECK_ASYNC
        })
        
        resolve()
    } catch(error) {
        yield put({
            type: ERROR_DECKS_ASYNC,
            payload: {
                error: error.message
            }
        })
        
        resolve()
    }
}

export default function* () {
    yield takeLatest(SAVE_DECK, saveDeck)
}