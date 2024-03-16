import { useState, createContext } from "react";

const userContext = createContext();

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState({});

  const value = { userData, setUserData };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserContext;
export { userContext };
