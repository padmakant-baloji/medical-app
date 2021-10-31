import React from "react";
import css from "./Heading.module.scss";

const Heading = ({ children, level, ...props }) => {
  const Tag = `h${level}`;
  return (
    <Tag {...props} className={css.heading}>
      {children}
    </Tag>
  );
};

export default Heading;
