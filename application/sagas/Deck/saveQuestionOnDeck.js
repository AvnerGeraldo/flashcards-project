import { SAVE_QUESTION_ON_DECK_ASYNC, ERROR_DECK_ASYNC } from '@actions'
import { SAVE_QUESTION_ON_DECK } from '@actions/saga-actions'
import { takeLatest, put } from 'redux-saga/effects'
import { addCardToDeck } from '@api'

function* saveQuestion({ payload: { resolve, reject, title, question, answer }}) {
    try {
        const response = yield addCardToDeck(title, { question, answer })

        if (response.error) {
            throw new Error(response.error)
        }

        if (!response.save) {
            throw new Error('Could not save the question. Please try again later!')
        }
        //Response
        yield put({
            type: SAVE_QUESTION_ON_DECK_ASYNC
        })

        resolve()
    } catch(error) {
        yield put({
            type: ERROR_DECK_ASYNC,
            payload: {
                error: error.message
            }
        })

        resolve()   
    }
}

export default function* () {
    yield takeLatest(SAVE_QUESTION_ON_DECK, saveQuestion)
}