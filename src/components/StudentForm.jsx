import { useState } from 'react';

import styles from '../styles/Students.module.css';

import { useStudentContext } from '../context/StudentsContextProvider';

import InputFormGroup from './InputFormGroup';

const StudentForm = ({ onSubmitForm, initialValues }) => {
  const [students] = useStudentContext();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleOnInputChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    /**
     * With the javaScript spread operator (...), we set the object content as the content of the prevValues data.
     * Then, override the specific object key with the new data that the user has inserted into the input.
     *
     * Ok, let see an example:
     *
     *  const prevValues = { id: 1, name: 'john', email: 'john@mail.com' };
     *
     *  // The newObject is a new object with the same key:value as the prevValues.
     *  const newObject = { ...prevValues };
     *
     *  const key = event.target.name; // name
     *  const value = event.target.value; // Some random name
     *
     *  // By doing this, I'm overriding the name key with the new value.
     *  // It's the same as "newObject.name = value".
     *  const newObject = { ...prevValues, [key]: value };
     */
    setValues((prevValues) => ({ ...prevValues, [key]: value }))
  };

  const validateForm = () => {
    let formErrors = {};

    if (!values.id) {
      formErrors.id = 'Id is required.'
    }
    if (!values.name) {
      formErrors.name = 'Name is required.'
    }
    if (!values.email) {
      formErrors.email = 'E-mail is required.'
    }

    /**
     * If the user has provided an email, we need to unsure that it's a valid email format.
     *
     * Note:
     * Normally we also check if the email is not already in use, and set an error if it is the case.
     * That verification is easy to do and I will leave that implementation for you!!
     */
    if (values.email) {
      /**
       * Some regex that match the well know email pattern
       */
      const validEmailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      /**
       * IF the email provided doesn't match our email pattern, means that is not a valid email,
       * and we need to set an error
       */
      if (!values.email.match(validEmailPattern)) {
        formErrors.email = 'Invalid E-mail format.'
      }
    }

    /**
     * If the user has provided an ID, we need to ensure that the ID is not in use.
     */
    if (values.id) {
      /**
       * Obviously I need to ensure that we skip our own match!!
       * For that, I ensure that the new Id is not equal to my original Id, otherwise i may get a false positive.
       */
      const existingStudent = students.find((student) => initialValues.id !== values.id && student.id === values.id);

      /**
       * The array method find, returns the first element that satisfy the condition, if any, or null if not.
       * So, if we got an student, mean that the ID is already in use and we need to set an error.
       *
       * if(existingStudent) is the same as if(existingStudent !== null)
       */
      if (existingStudent) {
        formErrors.id = 'A student with this ID already exists.'
      }
    }

    /**
     * Set the errors state with our errors or an empty object if none.
     */
    setErrors(formErrors);

    /**
     * We want to return true if we got errors, false if not.
     * So, Object.keys(formErrors).length > 0 will be true if we got errors, false if not.
     */
    return Object.keys(formErrors).length > 0;
  };

  const handleOnSubmit = (event) => {
    /**
     * We want to control what happens when the form is submitted,
     * so we stop the default behavior of a submit.
     */
    event.preventDefault();

    /**
     * Validate our form values before submit
     */
    const hasErrors = validateForm();

    /**
     * Only summit the form if there is no errors.
     *
     * if(!hasErrors) is the same as if(hasErrors === false)
     */
    if (!hasErrors) {
      onSubmitForm(values);
    }
  };

  return (
    <form noValidate onSubmit={handleOnSubmit}>
      <InputFormGroup
        name="id"
        label="Id"
        type="text"
        value={values.id}
        onChange={handleOnInputChange}
        error={errors.id}
      />
      <InputFormGroup
        name="name"
        label="Name"
        type="text"
        value={values.name}
        onChange={handleOnInputChange}
        error={errors.name}
      />
      <InputFormGroup
        name="email"
        label="E-mail"
        type="email"
        value={values.email}
        onChange={handleOnInputChange}
        error={errors.email}
      />
      <input
        className={styles.submitBtn}
        type="submit"
        value="Submit"
      />
    </form>
  )
};

export default StudentForm;
