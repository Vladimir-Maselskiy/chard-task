import { Formik, ErrorMessage, Form, Field } from 'formik';
import { StyledForm } from './Wellcome.styled';
// import { HiEyeOff, HiEye } from 'react-icons/hi';
// import { ReactComponent as EmailIcon } from 'images/email.svg';
// import { ReactComponent as PasswordIcon } from 'images/password.svg';
// import { ReactComponent as UserIcon } from 'images/user.svg';
// import { StyledNavLink } from './RegistrationForm.styled';

export const Wellcome = ({ step }) => {
  const handleSubmit = evt => {};

  return (
    <Formik
      initialValues={''}
      onSubmit={handleSubmit}
      // validationSchema={schema.register}
    >
      <StyledForm>
        <label htmlFor="firstName">First Name</label>
        <Field
          id="firstName"
          name="firstName"
          placeholder="Jane"
        />

        <label htmlFor="lastName">Last Name</label>
        <Field
          id="lastName"
          name="lastName"
          placeholder="Doe"
        />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};
