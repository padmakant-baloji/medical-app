import React from "react";
import Button from "@mui/material/Button";

export default function CustomizedButtons({
  buttonType = "contained",
  label = "Simple buttoon",
  startIcon,
  ...rest
}) {
  return (
    <div>
      <Button
        startIcon={startIcon}
        variant={buttonType}
        color="primary"
        {...rest}
      >
        {label}
      </Button>
    </div>
  );
}
