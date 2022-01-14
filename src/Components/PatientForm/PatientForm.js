import React, { Fragment } from "react";
import { Grid, Button } from "@mui/material";
import Modal from "../../Components/Modal/Modal";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import css from "./PatientForm.module.scss";
import Value from "../Value/Value";
import { TextareaAutosize } from "@mui/core";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import { Box } from "@mui/system";
import ArticleIcon from "@mui/icons-material/Article";
import AddTreatment from "../AddTreatment/AddTreatment";
import HealthRecords from "../HealthRecords/HealthRecords";
import BiotechIcon from "@mui/icons-material/Biotech";
import LabReports from "../LabReports/LabReports";

const PatientForm = ({ selectedAppointment }) => {
  const top100Films = [
    { title: "Headache" },
    { title: "Stomach" },
    { title: "Kidney" },
  ];

  const { name, age, gender, id: appointMentId } = selectedAppointment || {};

  const [isTreatmentModalOpen, setTreatmentModalOpen] = React.useState(false);
  const [isHealthRecordModalOpen, setHealthRecordModalOpen] =
    React.useState(false);

  const openHealthRecordModal = () => {
    setHealthRecordModalOpen(true);
  };

  const closeHealthRecordModal = () => {
    setHealthRecordModalOpen(false);
  };

  const openTratmentModal = () => {
    setTreatmentModalOpen(true);
  };

  const closeTreatmentModal = () => {
    setTreatmentModalOpen(false);
  };
  return (
    <Fragment>
      <div className={css.buttons}>
        <Button
          variant="outlined"
          color="primary"
          className={css.button}
          startIcon={<MedicalServicesIcon />}
          onClick={openTratmentModal}
        >
          Treatment
        </Button>

        <Button
          variant="outlined"
          color="primary"
          className={css.button}
          startIcon={<ArticleIcon />}
          onClick={openHealthRecordModal}
        >
          Health Records
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={css.button}
          startIcon={<BiotechIcon />}
          onClick={openHealthRecordModal}
        >
          Lab Reports
        </Button>
      </div>
      <div className={css.patientContainer}>
        <div className={css.patientDetails}>
          <div className={css.details}>
            <Value label="Name" value={name} />
            <Value label="Age" value={age} />
            <Value label="Gender" value={gender} />
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

        <TextareaAutosize
          maxRows={10}
          minRows={10}
          aria-label="maximum height"
          placeholder="Please add description"
          defaultValue=""
          style={{ width: "100%", marginTop: "20px" }}
        />
      </div>

      <Modal
        style={{ height: "90vh", width: "90%" }}
        heading="Add Treatment"
        open={isTreatmentModalOpen}
        handleClose={closeTreatmentModal}
      >
        <AddTreatment />
      </Modal>
      <Modal
        style={{ height: "90vh", width: "90%" }}
        heading="Records"
        open={isHealthRecordModalOpen}
        handleClose={closeHealthRecordModal}
      >
        <HealthRecords />
      </Modal>
      <Modal
        style={{ height: "90vh", width: "90%" }}
        heading="Lab Reports"
        open={isHealthRecordModalOpen}
        handleClose={closeHealthRecordModal}
      >
        <LabReports />
      </Modal>
    </Fragment>
  );
};

export default PatientForm;
