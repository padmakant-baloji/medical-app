import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import TextBox from "../../Components/TextBox/TextBox";
import css from "./login.module.scss";
import Button from "../../Components/Button/Button";
import MailOutlineSharpIcon from "@material-ui/icons/MailOutlineSharp";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";

const Login = () => {
  const [loginData, setLoginData] = useState({
    mobile: "",
  });

  const handleInput = (id, value) => {
    setLoginData({
      ...loginData,
      [id]: value,
    });
  };

  return (
    <div className={css.loginContainer}>
      <div className={css.loginDiv}>
        <Grid container spacing={3}>
          <Grid item sm={12} md={9} xs={12}>
            <TextBox
              label="Mobile Number"
              id="mobile"
              handleChange={handleInput}
              className={css.input}
            />
          </Grid>
          <Grid item md={3} className={css.nextBtn}>
            <Button label="Next" />
          </Grid>
        </Grid>
        <div className={css.or}>
          <p>OR Login with</p>
        </div>

        <div className={css.loginButtons}>
          <div>
            <Button
              startIcon={<MailOutlineSharpIcon />}
              buttonType="outlined"
              label="Gmail"
            />
          </div>
          <div>
            <Button
              label="Username"
              startIcon={<PersonSharpIcon />}
              buttonType="outlined"
            />
          </div>
          {/* <div>
            <Button label="Next" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Login;
