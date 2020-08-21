import React from "react"
import { connect } from "react-redux"
import Card from "../Card"
import { MessageContext } from "../Message"
import { NotFound as notFoundPath } from "../../../../constants"

const ContactList = ({ messages }) => {

    const mapContactList = () => messages.map((message, index) => ContactCard(message, index))

    return (<div className="my-4">
        {messages.length === 0 ? NotFound() : mapContactList()}
    </div>)
}

const mapStateToProps = (state) => ({ messages: state })

const NotFound = () => (
    <div className="w-full h-64 flex flex-col items-center justify-center">
        <img src={notFoundPath} width="60px" height="60px" />
        <p className="font-hairline mt-4 w-2/3 text-center">
            There's no contact with the name you provided</p>
    </div>
)

const ContactCard = (message, index) => {
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
        <Card key={index} />
    </MessageContext.Provider >)
}

export default connect(mapStateToProps)(ContactList);