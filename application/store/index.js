import { createStore } from 'redux'

//Reducer
import reducer from '@reducers'

const store = createStore(reducer)
export default store