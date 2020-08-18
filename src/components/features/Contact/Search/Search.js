import React from "react"
import TextfieldDefault from "../../../lib/Textfield"

const SearchContact = () => {
    return (<div className="px-4">
        <TextfieldDefault
            type="text"
            value={null}
            placeholder="Search contact"
            classes="font-medium" />
    </div>)
}

export default SearchContact