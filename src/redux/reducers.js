import { step } from "./state"
const changeText = (state = step, action) => {
    switch (action.type) {
        case "INCREMENT": return ++state
        default: return 0
    }
}
export default changeText