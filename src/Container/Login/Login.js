import React, { useState } from "react";
import css from "./login.module.scss";
import Mobile from "./Components/Mobile";
import Password from "./Components/Password";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";

const Login = () => {
  const [loginData, setLoginData] = useState({
    mobile: "",
  });
  const [state, setState] = useState("mobile");
  const [error, setError] = useState({ mobile: "" });
  const handleNext = () => {
    if (loginData.mobile.length < 10) {
      setError({
        mobile: "Please enter valid number",
      });
      return;
    } else {
      setState("password");
    }
  };
  const handleBack = () => {
    setState("mobile");
  };

  const handleInput = (id, value) => {
    let data = value;
    if (id === "mobile") {
      if (data.length > 10) {
        data = data.substr(0, 10);
      }
    }
    setLoginData({
      ...loginData,
      [id]: data,
    });
    setError({})
  };

  return (
    <div className={css.loginContainer}>
      <div className={css.loginDiv}>
        {state === "password" && (
          <div className={css.back} onClick={handleBack}>
            <ArrowBackSharpIcon /> Back
          </div>
        )}
        {state === "mobile" && (
          <Mobile
            value={loginData.mobile}
            handleInput={handleInput}
            handleNext={handleNext}
            error={error.mobile}
          />
        )}
        {state === "password" && (
          <Password
            value={loginData.password}
            handleInput={handleInput}
            handleNext={handleNext}
          />
        )}
      </div>
    </div>
  );
};
export default Login;
