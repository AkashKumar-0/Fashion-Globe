import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { SignPage } from './auth-page.styles';
import {
  selectCurrentUser,
  userAuthError,
} from '../../store/user/user.selector';
import { signInFailed } from '../../store/user/user.action';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authError = useSelector(userAuthError);
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    if (authError) {
      alert(authError.message);
      dispatch(signInFailed(null));
    } else if (user) {
      navigate('/');
    }
  }, [authError, dispatch, navigate, user]);

  return (
    <SignPage>
      <SignInForm />
      <SignUpForm />
    </SignPage>
  );
};

export default Auth;
