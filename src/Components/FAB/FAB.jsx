import { Button } from "react-bootstrap";
import React from "react";
import css from "./style.module.scss";

const FAB = ({ icon, position }) => {
  const pos = {
    topLeft: {
      left: "40px",
      top: "40px",
    },
    bottomRight: {
        bottom: '40px',
        right: '40px'
    },
  };
  return (
  <Button className={css.cntr} style={{...pos[position]}}>
        <i className={`fas fa-${icon} ${css.icon}`}></i>
  </Button>
  );
};
export default FAB;
