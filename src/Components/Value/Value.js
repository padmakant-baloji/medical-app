import React from "react";
import css from "./Value.module.scss";

const Value = ({ label, value }) => {
  return (
    <div className={css.valueContainer}>
      <div className={css.key}>{label}</div>
      <div className={css.value}>{value}</div>
    </div>
  );
};
export default Value;
