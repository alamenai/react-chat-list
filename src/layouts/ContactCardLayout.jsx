import React from "react"

const ContactCardLayout = (props) => {
    return <div className="flex px-4 hover:bg-gray-50 py-2">
        {props.left}
        <div className="flex-1">
            {props.right}
        </div>
    </div>
}

export default ContactCardLayout