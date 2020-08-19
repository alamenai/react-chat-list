import React from "react"
import TextfieldDefault from "../../../lib/Textfield"
import { connect } from "react-redux"
import { fitlerContactList } from "../../../../redux/actions/creators"

const SearchContact = ({ fitlerContactList }) => {

    const handleFilerContactList = (e) => {
        const contactName = e.target.value
        fitlerContactList(contactName);
    }

    return (<div className="px-4">
        <TextfieldDefault
            type="text"
            value={null}
            placeholder="Search contact"
            classes="font-medium"
            event={handleFilerContactList} />
    </div>)
}

export default connect(null, { fitlerContactList })(SearchContact)