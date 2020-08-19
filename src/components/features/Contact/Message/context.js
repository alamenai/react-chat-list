import React from "react"

const messageDefault = {
    contactName: "username",
    contactPhoto: {
        url: null,
        alt: null
    },
    time: "00:00",
    text: "",
    markedAsRead: false
}
const messageContext = React.createContext(messageDefault)

export default messageContext