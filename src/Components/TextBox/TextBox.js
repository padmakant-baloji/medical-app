import { TextField } from "@material-ui/core";
import React from "react";

const TextBox = ({ label, id, handleChange, error }) => {
  return (
    <TextField
      id={id}
      label={label}
      onChange={(e) => handleChange(id, e.target.value)}
      error={error}
      fullWidth
    />
  );
};

export default TextBox;
