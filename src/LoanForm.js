import "./FormStyles.css";
import Modal from "./Modal";
import { useState, useContext } from "react";
import MyComponent from "./MyComponent";
import { LoanInputContext } from "./contexts/LoanFormInputContext";
import { UserContext } from "./contexts/UserContext";

export default function LoanForm() {
  const userData = useContext(UserContext);

  const [erroMessage, setErroMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: userData.name,
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    setErroMessage(null);
    const { age } = loanInputs;
    const { phoneNumber } = loanInputs;

    if (age < 18 || age > 100) {
      setErroMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErroMessage("Phone Number Format Is Incorect");
    }
    setShowModal(true);
  }

  const btnISDisabled =
    loanInputs.name === "" ||
    loanInputs.phoneNumber === "" ||
    loanInputs.age === "";

  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  function handleNameInputChange(value) {
    setLoanInputs({ ...loanInputs, name: value });
  }

  function handlePhoneNumberInputChange(value) {
    setLoanInputs({ ...loanInputs, phoneNumber: value });
  }

  function handleAgeInputChange(value) {
    setLoanInputs({ ...loanInputs, age: value });
  }
  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a loan</h1>
        <hr/>
        {/* Context Provider */}
        <LoanInputContext.Provider
          value={{
            value: loanInputs.name,
            handleChange: handleNameInputChange,
            labelTitle: "Name",
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        <LoanInputContext.Provider
          value={{
            value: loanInputs.phoneNumber,
            handleChange: handlePhoneNumberInputChange,
            labelTitle: "Phone Number",
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        <LoanInputContext.Provider
          value={{
            value: loanInputs.age,
            handleChange: handleAgeInputChange,
            labelTitle: "Age",
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        <label style={{ marginTop: "20px" }}>Are you an employee?</label>
        <input
          style={{ marginTop: "8px" }}
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
        />

        <label>Salary:</label>
        <select
          style={{ marginTop: "8px" }}
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button
          className={btnISDisabled ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={btnISDisabled}
          id="submit-loan-btn"
        >
          Submit
        </button>
      </form>
      <Modal erroMessage={erroMessage} isVisible={showModal} />
    </div>
  );
}
