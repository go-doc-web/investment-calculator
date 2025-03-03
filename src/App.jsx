import React, { useContext } from "react";
import Header from "./componets/header/Header";
import UserInput from "./componets/user-input/UserInput";
import Results from "./componets/results/Results";
import MainLayout from "./layout/MainLayout.jsx";

import UserInputContext from "./context/UserInputContext";

function App() {
  const { isInputValid } = useContext(UserInputContext);

  if (!isInputValid) {
    return <p>Error:Expected Return not be zero </p>;
  }
  return (
    <>
      <Header />
      <UserInput />
      {isInputValid && <Results />}
    </>
  );
}

const Main = () => {
  return (
    <MainLayout>
      <App />
    </MainLayout>
  );
};
export default Main;
