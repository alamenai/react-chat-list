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
    let defaultClasses = "w-full bg-gray-50 outline-none h-12 font-helvetica text-base rounded-base tracking-wide px-4 py-2 focus:bg-gray-200"
    return renderTextfield(props, defaultClasses)
}
const renderTextfield = (props, defaultClasses) => {
    const { classes } = props
    return <Textfield {...props} classes={defaultClasses + " " + classes} />
}

Textfield.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired,
    classes: PropTypes.string

}

export default TextfieldDefault