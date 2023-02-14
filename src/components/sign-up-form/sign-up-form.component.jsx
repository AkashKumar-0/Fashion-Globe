import { useState } from 'react';
import FormHelper from '../form-helper/form-helper.component';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { SignUpContainer } from './sign-up-form.styles.jsx';
import Button from '../button/button.component';

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

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPssword) {
      alert('please make sure that Password and confirm password is same :)');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      /**
       * now we have to store this in our datastore database
       */
      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (err) {
      switch (err) {
        case 'auth/email-already-in-use':
          alert('auth/email-already-in-use');
          break;
        case 'auth/invalid-email':
          alert('auth/invalid-email');
          break;

        default:
          break;
      }
      console.log('user creation encountered an error', err);
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

        <Button type="submit">Sign In</Button>
      </form>
    </SignUpContainer>
  );
};
export default SignUpForm;
