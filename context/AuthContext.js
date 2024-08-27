import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Set Authentication function
  const setAuth = authUser=> {
    setUser(authUser);
    };

  //Set User function
  const setUserData =userData=> {
    setUser({ ...userData});
  };
  return (
    <AuthContext.Provider value={{ user, setAuth, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
