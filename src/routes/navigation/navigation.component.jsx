import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

// import { CartContext } from '../../context/cart.context';

import {
  NavContainer,
  NavLinksContainer,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  // it gives us he whole redux store
  // selectCurrentUSer = state => state.use.currentUser
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleSignOut = () => dispatch(signOutStart());
  return (
    <>
      <NavContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </NavLinksContainer>
      </NavContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
