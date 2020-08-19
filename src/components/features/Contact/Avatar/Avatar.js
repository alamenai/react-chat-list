import React, { useContext } from "react"
import Avatar from "../../../lib/Avatar"
import { MessageContext } from "../Message"
const ContactAvatar = () => {
    const { contactPhoto } = useContext(MessageContext);
    return (<Avatar src={contactPhoto.url} alt={contactPhoto.alt} />)
}

export default ContactAvatar