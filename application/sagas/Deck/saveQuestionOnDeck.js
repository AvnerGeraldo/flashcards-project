import { SAVE_QUESTION_ON_DECK } from '@actions/saga-actions'
import { takeLatest } from 'redux-saga/effects'
import { addCardToDeck } from '@api'

function* saveQuestion({ payload: { resolve, reject, title, question, answer }}) {
    try {
        const response = yield addCardToDeck(title, { question, answer })

        if (response.error) {
            throw new response.error
        }

        if (!response.save) {
            throw new Error('Error: Could not save the question. Please try again later!')
        }
        
        resolve()
        return { save: true }
    } catch(error) {
        resolve()
        return { error: error.message }        
    }
}

export default function* () {
    yield takeLatest(SAVE_QUESTION_ON_DECK, saveQuestion)
}