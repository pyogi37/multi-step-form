import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    selectedPlan: "",
    mainPlanCharge: 0,
    addOnServices: [{}],
    currentPage: 1,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
