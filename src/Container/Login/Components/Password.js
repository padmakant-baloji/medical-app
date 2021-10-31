import { Grid } from "@mui/material";
import React from "react";
import { Fade } from "react-animation-components";
import TextBox from "../../../Components/TextBox/TextBox";
import css from "../login.module.scss";

import Button from "../../../Components/Button/Button";
// import MailOutlineSharpIcon from "@material-ui/icons/MailOutlineSharp";
// import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import { Link } from "react-router-dom";

const Password = ({ handleInput }) => (
  <Fade in>
    <Grid container spacing={3}>
      <Grid item sm={12} md={9} xs={12}>
        <TextBox
          label="Password"
          id="mobile"
          type="password"
          handleChange={handleInput}
          className={css.input}
        />
      </Grid>
      <Grid item md={3} className={css.nextBtn}>
        <Button label="Next" />
      </Grid>
    </Grid>
    <div className={css.or}>
      <p>
        <Link to="/forgot-password">Forgot Password</Link>
      </p>
    </div>

    {/* <div className={css.loginButtons}>
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
      <div>
            <Button label="Next" />
          </div>
    </div> */}
  </Fade>
);
export default Password;
