import "./styles.css";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function App() {
 

  return (
    <div className="App">
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter Decimal"
        variant="outlined"
        margin="normal"
        color="success"
      />
      <div className="button-group">
        <Button variant="contained">
          Increment
        </Button>
        <Button variant="contained">
          Decrement
        </Button>
        <Button variant="outlined" color="error">
          Reset
        </Button>
      </div>
      <Typography variant="h3">1000</Typography>
    </div>
  );
}
