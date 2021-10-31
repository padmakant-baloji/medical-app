import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// const theme = createTheme({
//   palette: {
//     primary: "#2196f3",
//   },
// });

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
