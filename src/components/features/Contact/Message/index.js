import React from "react"
import MessageContext from "./context"
import SenderName from "../Name"
import MessageText from "./Body"
import MessageTime from "./Time"

const MessageContent = () => (
    <div className="ml-3 cursor-pointer">
        <div className="flex">
            <SenderName />
            <MessageTime />
        </div>
        <MessageText />
    </div>

)

export default MessageContent
export { MessageContext }