import { ERROR_DECKS_ASYNC } from '@actions'
import { SET_INITIAL_DATA } from '@actions/saga-actions'
import { takeLatest, put, call } from 'redux-saga/effects'

//API
import { setInitialData } from '@api'

function* getInitialDataOnServer() {
    try {
        const response = yield call(setInitialData)
        //Verificando se existe erro
        if (response.error) {
            throw response.error
        }

        if (!response.save) {
            throw new Error('Não foi possível buscar dados iniciais')
        }

        return 
    } catch (error) {
        yield put({ 
            type: ERROR_DECKS_ASYNC,
            payload: {
                error: error.message
            }
        })
    }
}


export default function* () {
    yield takeLatest(SET_INITIAL_DATA, getInitialDataOnServer)
}