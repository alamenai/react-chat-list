import { addStep } from "./creators"
import store from "../store"

const dispatch = (actionCreator) => store.dispatch(actionCreator)
const addStep = step => dispatch(addStep(step))
export { addStep }