import { createStore } from 'redux'
import { contact } from '../reducers'
let store = createStore(contact)

export default store