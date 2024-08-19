import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Set Authentication function
  const setAuth = (authUser) => {
    setUser(authUser);
  };

  //Set User function
  const setUserData = (userData) => {
    setUser({ ...userData, email: user?.email });
  };

  return (
    <AuthContext.Provider value={{ user, setAuth, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
