import "./styles.css";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function App() {
  const [decimal, setDecimal] = React.useState(0);

  function handleChange(e) {
    setDecimal(parseInt(e.target.value, 10));
  }

  function handleIncrement() {
    setDecimal((prev) => prev + 1);
  }

  function handleDecrement() {
    setDecimal((prev) => prev - 1);
  }

  function handleReset() {
    setDecimal(0);
  }

  let binary = Number(decimal).toString(2);
  const octal = Number(decimal).toString(8);
  const hexadecimal = Number(decimal).toString(16).toUpperCase();

  return (
    <div className="App">
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter Decimal"
        variant="outlined"
        margin="normal"
        value={decimal === 0 ? "" : decimal}
        onChange={handleChange}
      />
      <div className="button-group">
        <Button variant="contained" onClick={handleIncrement}>
          Increment
        </Button>
        <Button variant="contained" onClick={handleDecrement}>
          Decrement
        </Button>
        <Button variant="outlined" color="error" onClick={handleReset}>
          Reset
        </Button>
      </div>
      <div>
        <h4>{binary === "NaN" ? "Click Reset to Continue" : "Binary"}</h4>
        <Typography variant="h3">{binary === "NaN" ? 0 : binary}</Typography>
        <h4>Octal</h4>
        <Typography variant="h3">{octal === "NaN" ? 0 : octal}</Typography>
        <h4>Hexadecimal</h4>
        <Typography variant="h3">
          {hexadecimal === "NAN" ? 0 : hexadecimal}
        </Typography>
      </div>
    </div>
  );
}
