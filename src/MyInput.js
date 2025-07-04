import { useContext } from "react";
import { LoanInputContext } from "./contexts/LoanFormInputContext";
import { UserContext } from "./contexts/UserContext";

export default function MyInput() {
  const inputContext = useContext(LoanInputContext);
  const userData = useContext(UserContext);

  return (
    <>
      <div style={{ padding: "8px 0", width: "100%",textAlign:"start" }}>
        <label >{userData.name} ({inputContext.labelTitle})</label>
        <input
          style={{marginTop:"8px"}}
          value={inputContext.value}
          onChange={(event) => {
            inputContext.handleChange(event.target.value);
          }}
        />
      </div>
    </>
  );
}