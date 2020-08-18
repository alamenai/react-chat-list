import React, { useContext } from "react"
import Text from "../../../../lib/Text"
import MessageContext from "../context"

const MessageText = () => {
    const context = useContext(MessageContext);

    return (< Text content="Hello, how are you doing?"
        classes={`text-sm ${context.isNewMessage ? "font-bold" : "font-normal text-gray-700 font-helvatica"}`
        } />)
}

export default MessageText