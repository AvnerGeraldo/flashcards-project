import { handleActions } from 'redux-actions'

export default handleActions({
    GET_DECK_QUESTIONS: (state, { deck }) => ({
        ...state,
        deck,
    }),
    ERROR: (state, { error }) => ({
        ...state,
        error
    })
}
, {
    questions: [],
    deck: ''
})