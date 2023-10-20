import { ErrorMessage, Field, useFormikContext } from 'formik';

function InputField({
  className,
  name,
  placeholder,
  isErrorFromServer,
  errorFromServer,
}) {
  const { errors, touched } = useFormikContext();
  const isFieldError = errors[name] && touched[name];
  const inputStyle = {
    borderColor: isFieldError && 'red',
  };

  return (
    <>
      <Field
        className={`${className}__input`}
        placeholder={placeholder}
        name={name}
        style={inputStyle}
      />
      {isErrorFromServer ? (
        <span className={`${className}__error`}>{errorFromServer}</span>
      ) : (
        isFieldError && (
          <ErrorMessage
            className={`${className}__error`}
            component="div"
            name={name}
          />
        )
      )}
    </>
  );
}

export default InputField;
