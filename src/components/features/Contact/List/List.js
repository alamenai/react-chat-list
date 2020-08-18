import React from "react"
import ContactCard from "../Card"

const ContactList = () => {
    return <div className="my-4">
        <ContactCard isNewMessage={true} />
        <ContactCard isNewMessage={false} />
        <ContactCard isNewMessage={false} />
        <ContactCard isNewMessage={false} />
        <ContactCard isNewMessage={false} />
        <ContactCard isNewMessage={false} />
        <ContactCard isNewMessage={false} />
        <ContactCard isNewMessage={false} />
    </div>
}

export default ContactList