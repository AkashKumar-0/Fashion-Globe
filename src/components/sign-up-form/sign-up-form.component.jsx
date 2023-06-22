import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormHelper from '../form-helper/form-helper.component';

import { SignUpContainer } from './sign-up-form.styles.jsx';
import Button from '../button/button.component';
import { signUpStart } from '../../store/user/user.action';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPssword: '',
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPssword } = formFields;
  // console.log(formFields);

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // handling the submission of sign up procedure

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPssword) {
      alert('please make sure that Password and confirm password is same :)');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', err);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't Have an Account</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormHelper
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />

        <FormHelper
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />

        <FormHelper
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <FormHelper
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPssword"
          value={confirmPssword}
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};
export default SignUpForm;
