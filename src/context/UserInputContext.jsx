import { createContext, useState } from "react";
import { inputIsValid, isGreaterThanOrEqualToOne } from "../util/inputIsvalid";

const initialState = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expextedReturn: 6,
  duration: 6,
};

const settings = {
  isInputValid: inputIsValid(
    initialState,
    "duration",
    isGreaterThanOrEqualToOne
  ),
};

const { isInputValid } = settings;
console.log("isInputValid", isInputValid);

const UserInputContext = createContext(null);

export const UserInputProvider = ({ children }) => {
  const [userInput, setUserInput] = useState(initialState);

  return (
    <UserInputContext.Provider
      value={{ userInput, setUserInput, isInputValid }}
    >
      {children}
    </UserInputContext.Provider>
  );
};

export default UserInputContext;
