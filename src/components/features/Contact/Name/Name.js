import React, { useContext } from "react"
import Text from "../../../lib/Text"
import { MessageContext } from "../Message"

const Name = () => {
    const context = useContext(MessageContext);
    return (< Text
        content={context.contactName}
        classes="text-base font-sans font-medium text-gray-800 xs:text-sm sm:text-sm" />)
}

export default Name