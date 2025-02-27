import { useState, useContext } from "react";
import UserInputContext from "../../context/UserInputContext";

const UserInput = () => {
  const { userInput, setUserInput } = useContext(UserInputContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevInitialState) => {
      return {
        ...prevInitialState,
        [name]: Number(value),
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
            type="text"
            name="initialInvestment"
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="annualInvestment"
            value={userInput.annualInvestment}
            required
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="expextedReturn"
            value={userInput.expextedReturn}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
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
