import React, { useState } from "react";

// create the context
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {
  const [currentBuyer, setCurrentBuyer] = useState([]);
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return (
    <UserContext.Provider value={[currentBuyer, setCurrentBuyer]}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };