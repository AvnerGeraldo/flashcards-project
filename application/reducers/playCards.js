import { GET_DECK_QUESTIONS_ASYNC, ERROR_QUESTIONS_ASYNC } from '@actions'

const initialState = {
    questions: [],
    deck: ''
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_DECK_QUESTIONS_ASYNC:
            const { deck } = payload
            return {
                ...state,
                deck
            }
        case ERROR_QUESTIONS_ASYNC:
            const { error } = payload
            return {
                ...state,
                error
            }
        default:
            return state
    }
}