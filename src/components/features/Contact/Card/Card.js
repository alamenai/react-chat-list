import React from "react"
import { MessageContext } from "../Message"
import ContactCardLayout from "../../../../layouts/ContactCardLayout"
import ContactAvatar from "../Avatar"
import MessageContent from "../Message"

const ContactCard = ({ isNewMessage }) => (
    <MessageContext.Provider value={{ isNewMessage: isNewMessage }}>
        <ContactCardLayout
            left={<ContactAvatar />}
            right={<MessageContent />} />
    </MessageContext.Provider>
)

export default ContactCard