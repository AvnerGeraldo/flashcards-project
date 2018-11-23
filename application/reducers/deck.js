import { handleActions } from 'redux-actions'

export default handleActions({
        GET_DECKS: (state, { dataDecks }) => ({
            ...state,
            dataDecks,
        }),
        ERROR: (state, { error }) => ({
            ...state,
            error
        })
    }
    , {
        dataDecks: {},
        error: ''
})