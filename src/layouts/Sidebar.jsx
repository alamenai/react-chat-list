import React from "react"

const Sidebar = ({ children }) => {
    return <div className="bg-white py-4 min-h-screen
                           xs:w-screen sm:w-2/5
                           md:max-w-xs lg:max-w-xs xl:max-w-xs">
        {children}
    </div>
}

export default Sidebar