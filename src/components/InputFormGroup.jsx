import styles from '../styles/Students.module.css';

/**
 * Notice that the error property has an "= null". This means that the error property is optional,
 * and for that case, we need to set it's default value. In other words, the error property will assume the
 * null value if we don't provide a proper value, otherwise the null is dropped and the error property
 * will assume the value that is provided by us.
 *
 * For example, if we define that the type property is "text" by default, we do not need to provide
 * that property when using the InputFormGroup component, if the input in question is of type "text".
 * We only need to send the type property when we want an input of type "email" or "password", for example.
 *
 * Input of type "text":
 *
 *  <InputFormGroup
 *   name="name"
 *   label="Name"
 *   value={values.name}
 *   onChange={handleOnInputChange}
 *  />
 *
 * Input of type "email":
 *
 *  <InputFormGroup
 *   name="email"
 *   label="E-mail"
*    type="email"
 *   value={values.name}
 *   onChange={handleOnInputChange}
 *  />
 *
 */
const InputFormGroup = ({
  name,
  label,
  value,
  type,
  onChange,
  error = null,
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />

      {/*
        You can use a ternary operator to decide when to rendering something.
        In this case, we only show the error if we got any, otherwise, do not render it.
      */}
      {error ? (
        <p className={styles.formGroupError}>
          {error}
        </p>
      ) : null}
    </div>
  )
};

export default InputFormGroup;
