import { useContext } from "react";
import UserInputContext from "../../context/UserInputContext";

const Results = () => {
  const { userInput } = useContext(UserInputContext);

  return (
    <div>
      <h2>Investment Summary</h2>
      <p>Initial Investment: {userInput.initialInvestment}</p>
      <p>Annual Investment: {userInput.annualInvestment}</p>
      <p>Expected Return: {userInput.expextedReturn}%</p>
      <p>Duration: {userInput.duration} years</p>
    </div>
  );
};

export default Results;
