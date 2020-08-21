import React from "react"
import TextfieldDefault from "../../../lib/Textfield"
import { connect } from "react-redux"
import { fitlerContactList } from "../../../../redux/actions/creators"

const SearchContact = ({ fitlerContactList }) => {

    const handleFilterContactList = (e) => {
        const contactName = e.target.value
        fitlerContactList(contactName);
    }

    return (<div className="px-4">
        <TextfieldDefault
            type="text"
            value={null}
            placeholder="Search contact"
            classes="font-medium"
            event={handleFilterContactList} />
    </div>)
}

export default connect(null, { fitlerContactList })(SearchContact)