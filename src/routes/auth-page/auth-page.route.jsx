import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { SignPage } from './auth-page.styles';

const Auth = () => {
  return (
    <SignPage>
      <SignInForm />
      <SignUpForm />
    </SignPage>
  );
};

export default Auth;
