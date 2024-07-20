import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import Contact from "../contact/Contact";
import css from "./contactlist.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    dispatch(deleteContact(updatedContacts));
  };

  const contactsToList = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {contactsToList.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
