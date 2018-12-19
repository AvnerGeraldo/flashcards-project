import { takeLatest, call, put } from 'redux-saga/effects'

//Actions
import { GET_DECK } from '@actions/saga-actions'
import { GET_DECK_ASYNC, ERROR_DECK_ASYNC } from '@actions'

//API
import { getDeck } from '@api'

function* getDeckOnApi({ payload: { resolve, reject, deck } }) 
{
    try {
        const response = yield call(getDeck, deck)

        if (response.error) {
            throw response.error
        }

        yield put({
            type: GET_DECK_ASYNC,
            payload: {
                data: response
            }
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

//Export Data
export default function* () {
    yield takeLatest(GET_DECK, getDeckOnApi)
}