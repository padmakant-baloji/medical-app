import React from "react";
import css from "./style.module.scss";

const Header = () => {
  return (
    <div className={css.cntr}>
      <p className={css.logo}>CLINIC NAME</p>
      

      <p className={css.loginCntr}>
        <i className={`fas fa-user-alt ${css.login}`}></i>
      </p>
    </div>
  );
};

export default Header;
