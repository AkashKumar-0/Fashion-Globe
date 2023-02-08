import { useState } from 'react';
import FormHelper from '../form-helper/form-helper.component';
import {
  signInWithGooglePopup,
  // eslint-disable-next-line no-unused-vars
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
/**
 * @UserContext {@return value {object}} from context
 */
import Button from '../button/button.component';

import './sign-in-form.styles.scss';
const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    // console.log("reset formfield");
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      // console.log("google signin ", user);
      // createUserProfileDocument(response);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetFormFields();
      await signInAuthUserWithEmailAndPassword(email, password);
      // console.log("sign in with email and pass -> ", user);

      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert("Paaword doesn't match ! try again :)");
          break;
        case 'auth/user-not-found':
          alert('User Not Found');
          break;
        default:
          console.log(err);
      }
      console.log('user creation encountered an error', err);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Sign IN </h2>
      <form onSubmit={handleSubmit}>
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
        <div className="btn-flex">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign-In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;

/**
 * @Form_Helper_efficient_way
 *      <FormHelper
          label="Email"
          otherProps = {{   //this is object thats's why double curly bracket
            type:"email",
            onChange:{handleChange},
            name:"email",
            value:{email},
            required: true,
          }}
         
        />
 * 
 */
