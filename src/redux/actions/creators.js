import { CONTACT_FILTER } from "./types"
export const fitlerContactList = (searchCriteria) => {
    return {
        type: CONTACT_FILTER,
        searchCriteria
    }
}