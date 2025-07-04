import "./FormStyles.css"
import Modal from "./Modal"
import { useState } from "react"

export default function LoanForm() {

    const [erroMessage, setErroMessage] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [loanInputs, setLoanInputs] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        isEmployee: false,
        salaryRange: "",
    })

    function handleFormSubmit(event) {
        event.preventDefault()
        setErroMessage(null)
        const { age } = loanInputs
        const { phoneNumber } = loanInputs;

        if (age < 18 || age > 100) {
            setErroMessage("The age is not allowed")
        } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
            setErroMessage("Phone Number Format Is Incorect")
        }
        setShowModal(true)

    }

    const btnISDisabled =
        loanInputs.name === "" ||
        loanInputs.phoneNumber === "" ||
        loanInputs.age === "";

    function handleDivClick() {
        if (showModal) {
            setShowModal(false)
        }
    }

    return (
        <div
            onClick={handleDivClick}
            className="flex"
            style={{ flexDirection: "column", }}>
            <form id="loan-form" className="flex" style={{ flexDirection: "column", }}>
                <h1>Requesting a loan</h1>
                <hr></hr>

                <label>Name: </label>
                <input value={loanInputs.name} onChange={(event) => {
                    setLoanInputs({ ...loanInputs, name: event.target.value })
                }} />

                <label>Phone Number: </label>
                <input value={loanInputs.phoneNumber} onChange={(event) => {
                    setLoanInputs({ ...loanInputs, phoneNumber: event.target.value })
                }} />

                <label>Age: </label>
                <input value={loanInputs.age} onChange={(event) => {
                    setLoanInputs({ ...loanInputs, age: event.target.value })
                }} />

                <label style={{ marginTop: "30px", }}>Are you an employee?</label>
                <input type="checkbox"
                    checked={loanInputs.isEmployee}
                    onChange={(event) => {
                        setLoanInputs({ ...loanInputs, isEmployee: event.target.checked })
                    }}
                />

                <label>Salary:</label>
                <select value={loanInputs.salaryRange} onChange={(event) => {
                    setLoanInputs({ ...loanInputs, salaryRange: event.target.value })
                }} >
                    <option>less than 500$</option>
                    <option>between 500$ and 2000$</option>
                    <option>above 2000$</option>
                </select>

                <button
                    className={btnISDisabled ? "disabled" : ""}
                    onClick={handleFormSubmit}
                    disabled={btnISDisabled}
                    id="submit-loan-btn">
                    Submit</button>

            </form>
            <Modal erroMessage={erroMessage} isVisible={showModal} />
        </div>
    )
} 