import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./contactform.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const addContact = (newContact) => {
    return {
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    };
  };

  const handleSubmit = (values, actions) => {
    const newContact = addContact(values);
    dispatch({
      type: "contact/add",
      payload: newContact,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {() => {
        return (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <label className={css.formLabel}>Name</label>
              <Field className={css.formInput} type="text" name="name" />
              <ErrorMessage
                className={css.errorMessage}
                name="name"
                component="span"
              />
            </div>
            <div className={css.formGroup}>
              <label className={css.formLabel}>Number</label>
              <Field className={css.formInput} type="text" name="number" />
              <ErrorMessage
                className={css.errorMessage}
                name="number"
                component="span"
              />
            </div>
            <button className={css.formBtn} type="submit">
              Add contact
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
