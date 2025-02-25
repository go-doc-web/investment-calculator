import React from "react";
import Header from "./componets/header/Header";
import UserInput from "./componets/user-input/UserInput";
import Results from "./componets/results/Results";
import { UserInputProvider } from "./context/UserInputContext";

function App() {
  return (
    <UserInputProvider>
      <Header />
      <UserInput />
      <Results />
    </UserInputProvider>
  );
}

export default App;
