import './App.css';
import LoanForm from './LoanForm'
import { UserContext } from "./contexts/UserContext";

function App() {

  return (
    <UserContext.Provider
      value={{ userName: "m.m", email: "maher@gmail.com", name: "Maher" }}
    >
      <div className="App" style={{ marginTop: "80px" }}>
        <LoanForm />
      </div>
    </UserContext.Provider>
  );
}

export default App;