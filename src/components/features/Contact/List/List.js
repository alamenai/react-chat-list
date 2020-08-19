import React from "react"
import { connect } from "react-redux"
import ContactCard from "../Card"
import { MessageContext } from "../Message"
import { NotFound } from "../../../../constants"

const ContactList = ({ messages }) => {

    const mapContactToList = () => messages.map((message, index) => renderContactCard(message, index))

    return (<div className="my-4">
        {messages.length === 0 ? renderNotFound() : mapContactToList()}
    </div>)
}

const mapStateToProps = (state) => ({ messages: state })

const renderNotFound = () => (
    <div className="w-full h-64 flex flex-col items-center justify-center">
        <img src={NotFound} width="60px" height="60px" />
        <p className="font-hairline mt-4 w-2/3 text-center">
            There's no contact with the name you provided</p>
    </div>
)

const renderContactCard = (message, index) => {
    const {
        contactName,
        markedAsRead,
        contactPhoto,
        time,
        text
    } = message;

    return (< MessageContext.Provider value={{
        contactName,
        contactPhoto,
        time,
        text,
        markedAsRead,
    }}>
        <ContactCard key={index} />
    </MessageContext.Provider >)
}

export default connect(mapStateToProps)(ContactList);