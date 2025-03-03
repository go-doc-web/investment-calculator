import { useContext, useState, useEffect } from "react";
import UserInputContext from "../../context/UserInputContext";
import {
  calculateInvestmentResults,
  formatter,
} from "../../util/investment.js";
//TODO Сделать стили и продолжить урок и поторить контекст
const Results = () => {
  const { userInput } = useContext(UserInputContext);
  const [resultData, setResultData] = useState([]);
  const [initialInvestment, setInitialInvestment] = useState(null);

  useEffect(() => {
    if (userInput) {
      const data = calculateInvestmentResults(userInput);
      setResultData(data);
      if (data.length > 0) {
        const initialInvestmentValue =
          data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
        setInitialInvestment(initialInvestmentValue);
      }
    }
  }, [userInput]);

  if (!userInput) {
    return <div>Loading...</div>;
  }

  if (!resultData.length || initialInvestment === null) {
    return <div style={{ textAlign: "center" }}>No data available</div>;
  }
  console.log("resultData", resultData);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Investment Summary</h2>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((item, index) => {
            const totalInterest =
              item.valueEndOfYear -
              item.annualInvestment * item.year -
              initialInvestment;
            const totalAmountInvested = item.valueEndOfYear - totalInterest;
            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Results;
