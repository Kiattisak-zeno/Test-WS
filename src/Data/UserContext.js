import React, { createContext, useContext, useState } from "react";
import { node } from "prop-types";

const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

const initialUser = {
  items: [],
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const [userLogin, setUserLogin] = useState("");
  const [userStatus, setUserStatus] = useState(false);

  function addUser(DataUser) {
    setUser((prevUser) => ({
      ...prevUser,
      items: [...prevUser.items, DataUser],
    }));
  }
  function LoginUser(DataUser) {
    setUserLogin(DataUser);
  }

  const UserStore = {
    user,
    userLogin,
    userStatus,
    userAction: {
      addUser,
      LoginUser,
      setUserStatus,
    },
  };

  return (
    <UserContext.Provider value={UserStore}>{children}</UserContext.Provider>
  );
};

UserContext.propTypes = {
  children: node.isRequired,
};

//  export default CartProvider;
