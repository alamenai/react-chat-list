import React from "react"
import PropTypes from "prop-types"

const Textfield = ({ type, value, placeholder, event, classes }) => {
    return <input
        className={classes}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={event} />
}

const TextfieldDefault = (props) => {
    let mobileClasses = "xs:h-10 xs:py-1"
    let defaultClasses = "w-full bg-gray-50 outline-none h-12 font-helvetica text-base rounded-base tracking-wide px-4 py-2 focus:bg-gray-200"
    return <Textfield {...props} classes={defaultClasses + " " + mobileClasses + " " + props.classes} />
}

Textfield.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired,
    classes: PropTypes.string
}

export default TextfieldDefault