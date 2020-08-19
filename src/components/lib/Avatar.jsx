import React from "react"
import PropTypes from "prop-types"

const Avatar = ({ src, alt, classes }) => {
    return <img src={src} alt={alt} className={classes} />
}

const AvatarDefault = (props) => {
    let defaultClasses = "rounded-full w-12 h-12 object-cover"
    return renderAvatar(props, defaultClasses)
}
const renderAvatar = (props, defaultClasses) => {
    const { classes } = props
    return <Avatar {...props} classes={defaultClasses + " " + classes} />
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default AvatarDefault