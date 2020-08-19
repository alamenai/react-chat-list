import { messages } from "../../components/features/Contact/List/state"

const contact = (state = messages, action) => {
    switch (action.type) {
        case 'CONTACT_FILTER':
            const criteria = action.searchCriteria.trim();
            state = messages
            return state.filter(message =>
                message.contactName.toLowerCase().includes(criteria.toLowerCase()))
        default:
            return state
    }
}

export default contact