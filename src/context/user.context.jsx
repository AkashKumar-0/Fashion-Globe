import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
/**
 * @OBJECTIVE creating this file bcz we need a flow of data of user in our app like history 
profile when he/she will sign in . this is a effective way , bcz we don't have to send data like a ladder step by step ,that's why we are making <app/> child of <userContext/>
READ MORE TO GET CLARIFICATON OF ALL THIS
 * @guide1 send this userprovider to index.js to make app child of itself
 * @guide2 we need to store data whenever user create account/login
 */
/**
 *@UserContext {object} as the actual value we want to access
 */

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

/**
 *
 * @UserProvider {what fxn will do}
 *  - this provider allowing any of its child component to access the value inside ofit's use sate
 *
 */

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // [value, setter]
  // call the setter and get the value anywhere inside of the component tree that is nested whithin this actual provider value

  /**
   * @value {object} - return two value
   */

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // console.log(user);
      if (user) createUserDocumentFromAuth(user);

      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
