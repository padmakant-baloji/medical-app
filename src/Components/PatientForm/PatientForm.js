import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import css from "./PatientForm.module.scss";
import Value from "../Value/Value";

const PatientForm = () => {
  const top100Films = [
    { title: "Headache" },
    { title: "Stomach" },
    { title: "Kidney" },
  ];
  return (
    <div className={css.patientContainer}>
      <div className={css.patientDetails}>
        <div className={css.details}>
          <Value label="Name" value="Swapnesh kore" />
          <Value label="Age" value="23" />
          <Value label="Gender" value="Male" />
        </div>

        <div className={css.autoComplete}>
          <Autocomplete
            fullWidth
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Visited for"
                fullWidth
                variant="standard"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientForm;
