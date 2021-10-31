import { TextField } from "@mui/material";
import React from "react";

const TextBox = ({ label, id, handleChange, error, value, ...rest }) => {
  return (
    <TextField
      id={id}
      label={label}
      onChange={(e) => handleChange(id, e.target.value)}
      error={!!error}
      fullWidth
      value={value}
      {...rest}
      helperText={error}
    />
  );
};

export default TextBox;
