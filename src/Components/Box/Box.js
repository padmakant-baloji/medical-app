import { Paper } from "@mui/material";
import React from "react";
import css from "./Box.module.scss";

const Box = ({ children, heading, ...rest }) => (
  <Paper elevation={3} {...rest} className={css.box}>
    {/* <h2 className={css.heading}>{heading}</h2> */}
    <div className={css.content}>{children}</div>
  </Paper>
);

export default Box;
