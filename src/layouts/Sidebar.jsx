import React from "react"

const Sidebar = (props) => {
    return <div className="py-4 bg-white w-1/4 h-screen">
        {props.children}
    </div>
}

export default Sidebar