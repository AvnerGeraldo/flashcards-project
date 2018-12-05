import { SAVE_ANSWER_ON_DECK } from '@actions/saga-actions'
import { takeLatest } from 'redux-saga/effects'
import { saveAnswerQuestion } from '@api'

function* saveAnswer({ payload: { resolve, reject, title, indexQuestion, answer }}) {
    try {
        const response = yield saveAnswerQuestion(title, indexQuestion, answer)

        if (response.error) {
            throw new response.error
        }

        if (!response.save) {
            throw new Error('Erro: Não foi possível salvar resposta. Tente novamente mais tarde!')
        }
        
        resolve()
        return { save: true }
    } catch(error) {
        resolve()
        return { error: error.message }        
    }
}

export default function* () {
    yield takeLatest(SAVE_ANSWER_ON_DECK, saveAnswer)
}