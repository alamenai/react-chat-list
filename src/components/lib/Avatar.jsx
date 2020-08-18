import React from "react"
import PropTypes from "prop-types"

const Avatar = ({ src, alt, classes }) => {
    return <img src={src} alt={alt} width="50px" height="50px" className={classes} />
}

const AvatarDefault = (props) => {
    let defaultClasses = "rounded-full"
    return renderAvatar(props, defaultClasses)
}
const renderAvatar = (props, defaultClasses) => {
    const { classes } = props
    return <Avatar {...props} classes={defaultClasses + " " + classes} />
}

Avatar.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export default AvatarDefault