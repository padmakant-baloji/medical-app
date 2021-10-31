import React, { Fragment, memo, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import css from "./AddAppointment.module.scss";
import Button from "../../../../Components/Button/Button";

const AddAppointment = ({ handleNewAppointment, data }) => {
  const [showOtherDetails, setShowOtherDetails] = useState(false);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    if (data.mobileNumber.length === 10) {
      setLoader(true);
      setTimeout(() => {
        setShowOtherDetails(true);
        setLoader(false);
      }, 2000);
    }
  }, [data.mobileNumber]);

  return (
    <div>
      <Grid container spacing={2} className={css.items}>
        <Grid item xs={6}>
          <TextField
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile Number"
            variant="standard"
            fullWidth
            onChange={handleNewAppointment}
            value={data.mobileNumber}
            disabled={loader}
          />
        </Grid>
        {loader && <div className={css.loader}>Loading...</div>}
      </Grid>
      {showOtherDetails && (
        <Fragment>
          <Grid container spacing={3} className={css.items}>
            <Grid item xs={6}>
              <TextField
                name="name"
                id="name"
                label="Name"
                variant="standard"
                fullWidth
                onChange={handleNewAppointment}
                value={data.name}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="age"
                name="age"
                label="Age"
                variant="standard"
                fullWidth
                onChange={handleNewAppointment}
                value={data.age}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} className={css.items}>
            <Grid item xs={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  value={data.gender}
                  onChange={handleNewAppointment}
                  className={css.radioContainer}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <div className={css.nextButton}>
            <Button label="Submit" />
          </div>
        </Fragment>
      )}
    </div>
  );
};
export default memo(AddAppointment);
