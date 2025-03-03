import React from "react";
import { UserInputProvider } from "../context/UserInputContext";
const MainLayout = ({ children }) => {
  return <UserInputProvider>{children}</UserInputProvider>;
};

export default MainLayout;
