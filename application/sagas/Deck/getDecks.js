import { takeLatest, put, call } from 'redux-saga/effects'
import { GET_DECKS_ASYNC, ERROR_DECKS_ASYNC } from '@actions'
import { GET_DECKS } from '@actions/saga-actions'

//API
import { getDecks } from '@api'

function* getDecksInApi({ payload: { resolve, reject } })
{
    try {
        const response = yield call(getDecks)

        if (response.error) {
            throw response.error
        }

        //Data
        yield put({ 
            type: GET_DECKS_ASYNC,
            payload: {
                dataDecks: response
            }
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

//Export data
export default function* () {
    yield takeLatest(GET_DECKS, getDecksInApi)
}