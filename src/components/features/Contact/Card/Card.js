import React from "react"
import ContactCardLayout from "../../../../layouts/ContactCardLayout"
import ContactAvatar from "../Avatar"
import MessageContent from "../Message"

const ContactCard = () => (
    <ContactCardLayout
        left={<ContactAvatar />}
        right={<MessageContent />} />
)

export default ContactCard