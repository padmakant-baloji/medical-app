import { Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import TextBox from "../../../Components/TextBox/TextBox";
import css from "../login.module.scss";

import Button from "../../../Components/Button/Button";
// import MailOutlineSharpIcon from "@material-ui/icons/MailOutlineSharp";
// import PersonSharpIcon from "@material-ui/icons/PersonSharp";

const Mobile = ({ handleInput, handleNext, value,error }) => (
  <Fragment>
    <Grid container spacing={3}>
      <Grid item sm={12} md={9} xs={12}>
        <TextBox
          label="Mobile Number"
          id="mobile"
          handleChange={handleInput}
          className={css.input}
          value={value}
          error={error}
          type="number"
        />
      </Grid>
      <Grid item md={3} className={css.nextBtn}>
        <Button label="Next" onClick={handleNext} />
      </Grid>
    </Grid>
    {/* <div className={css.or}>
      <p>OR Login with</p>
    </div> */}

    <div className={css.loginButtons}>
      {/* <div>
        <Button
          startIcon={<MailOutlineSharpIcon />}
          buttonType="outlined"
          label="Forgot Password"
        />
      </div> */}
      {/* <div>
        <Button
          label="Username"
          startIcon={<PersonSharpIcon />}
          buttonType="outlined"
        />
      </div> */}
      {/* <div>
            <Button label="Next" />
          </div> */}
    </div>
  </Fragment>
);
export default Mobile;
