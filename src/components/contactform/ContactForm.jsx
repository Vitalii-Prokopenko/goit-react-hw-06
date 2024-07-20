import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";
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

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
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
