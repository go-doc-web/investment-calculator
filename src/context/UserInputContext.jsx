import { createContext, useState } from "react";

const initialState = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expextedReturn: 6,
  duration: 10,
};

const UserInputContext = createContext(null);

export const UserInputProvider = ({ children }) => {
  const [userInput, setUserInput] = useState(initialState);

  return (
    <UserInputContext.Provider value={{ userInput, setUserInput }}>
      {children}
    </UserInputContext.Provider>
  );
};

export default UserInputContext;
