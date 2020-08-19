import React from "react"
import { ContactSearch } from "../components/features/Contact"
import ContactList from "../components/features/Contact/List"
import Sidebar from "../layouts/Sidebar"
class App extends React.Component {
    render() {
        return <div>
            <Sidebar>
                <ContactSearch />
                <ContactList />
            </Sidebar>
        </div>

    }
}
export default App