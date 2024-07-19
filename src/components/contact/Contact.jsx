import { TiUser } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";
import PropTypes from "prop-types";
import css from "./contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={css.contactItem}>
      <div className={css.contactInfo}>
        <p className={css.contactName}><TiUser style={{marginRight: 10}}/> {contact.name}</p>
        <p className={css.contactNumber}><TiPhone style={{marginRight: 10}}/> {contact.number}</p>
      </div>
      <button type="button" className={css.contactBtn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
}

export default Contact;
