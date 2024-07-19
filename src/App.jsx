import { useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./components/contactform/ContactForm";
import SearchBox from "./components/searchbox/SearchBox";
import ContactList from "./components/contactlist/ContactList";


function App() {
  const contacts = useSelector((state) => state.contacts.items); 

    return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 && <ContactList style={{ width: "100%" }} />}
    </div>
  );
}

export default App;
