import React, { createContext, useContext, useState } from "react";

interface UserDetails {
  name: string,
  email: string
}

const UserContext = createContext({});

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<any>(); 

  return (
    <UserContext.Provider value={{userDetails, setUserDetails}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };