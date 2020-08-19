import React, { useContext } from "react"
import Text from "../../../../lib/Text"
import MessageContext from "../context"

const MessageText = () => {
    const context = useContext(MessageContext);

    return (< Text content={context.text}
        classes={`text-sm ${context.markedAsRead ? "font-normal text-gray-700 font-helvatica" : "font-bold"}`
        } />)
}

export default MessageText