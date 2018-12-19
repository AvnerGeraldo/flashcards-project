import { GET_DECKS_ASYNC, ERROR_DECKS_ASYNC } from '@actions'

const initialState = {
    dataDecks: {},
    error: ''
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_DECKS_ASYNC:
            const { dataDecks } = payload
            return {
                ...state,
                dataDecks
            }
        case ERROR_DECKS_ASYNC: {
            const { error } = payload
            return {
                ...state,
                dataDecks: {},
                error
            }
        }

        default:
            return state
    }
}