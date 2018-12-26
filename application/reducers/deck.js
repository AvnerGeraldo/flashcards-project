import { SAVE_QUESTION_ON_DECK_ASYNC, GET_DECK_ASYNC, ERROR_DECK_ASYNC } from '@actions'

const initialState = {
    data: {},
    error: ''
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case SAVE_QUESTION_ON_DECK_ASYNC:
            return {
                ...state,
                error: ''
            }
        case GET_DECK_ASYNC:
            const { data } = payload
            return {
                ...state,
                data
            }
        case ERROR_DECK_ASYNC: {
            const { error } = payload
            return {
                ...state,
                data: {},
                error
            }
        }

        default:
            return state
    }
}