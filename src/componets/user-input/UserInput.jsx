import { useState, useContext } from "react";
import UserInputContext from "../../context/UserInputContext";

const UserInput = () => {
  const { userInput, setUserInput } = useContext(UserInputContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevInitialState) => {
      return {
        ...prevInitialState,
        [name]: value,
      };
    });
  };
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            name="initialInvestment"
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            name="annualInvestment"
            value={userInput.annualInvestment}
            required
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            name="expextedReturn"
            value={userInput.expextedReturn}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            name="duration"
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
