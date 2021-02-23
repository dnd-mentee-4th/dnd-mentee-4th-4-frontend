import React, { useState, useEffect, createContext } from 'react';

const getLoginInfoFromStorage = localStorage.getItem('zzomssa') === true;
const getProfileInfoFromStorage = localStorage.getItem('zzomssa_profile');

const loginInitialState = {
  isLogged: getLoginInfoFromStorage,
  profile: getProfileInfoFromStorage,
  setIsLogged: () => {},
  setProfile: () => {},
};

const LoginContext = createContext(loginInitialState);

const LoginProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(getLoginInfoFromStorage);
  const [profile, setProfile] = useState(getProfileInfoFromStorage);

  const value = { isLogged, setIsLogged, profile, setProfile };

  useEffect(() => {
    localStorage.setItem('zzomssa', isLogged);
    localStorage.setItem('zzomssa_profile', profile);
  }, [isLogged, profile]);

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginContext;

export { LoginProvider };
