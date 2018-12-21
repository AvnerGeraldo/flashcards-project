import { SAVE_DECK, GET_DECKS, ERROR_DECKS_ASYNC } from '@actions/saga-actions'
import { takeLatest, put } from 'redux-saga/effects'
import { saveDeckTitle } from '@api'

function* saveDeck({ payload: { resolve, reject, title }}) {
    try {
        const response = yield saveDeckTitle(title)

        if (response.error) {
            throw new response.error
        }

        if (!response.save) {
            throw new Error('Erro: Não foi possível salvar o deck. Tente novamente mais tarde!')
        }
        
        //Response data
        resolve()
    } catch(error) {
        put({
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