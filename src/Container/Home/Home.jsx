import { Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useSelector } from "react-redux";
import moment from 'moment';
import SideMenu from "../../Components/SideMenu/SideMenu";
import css from "./Home.module.scss";
import Box from "../../Components/Box/Box";
import Appointments from "./Components/Appointments/Appointments";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import PatientForm from "../../Components/PatientForm/PatientForm";
import Heading from "../../Components/Heading/Heading";
import Modal from "../../Components/Modal/Modal";
import AddAppointment from "./Components/AddAppointment/AddAppointment";

const Home = () => {
  useSelector((state) => {
    console.log(state);
  });
  const [open, setOpen] = React.useState(false);
  const initialAppointmentValues = {
    name: "",
    age: "",
    mobileNumber: "",
    gender: "",
    date: moment()
  };
  const [newAppointment, setNewAppointment] = useState({
    ...initialAppointmentValues,
  });

  const [appointments, setAppointments] = useState({});
  const getAppointMentData = () => {
    const appointments = localStorage.getItem("appointments");
    if (appointments) {
      return JSON.parse(appointments);
    }
    return [];
  };

  const setAppointMentsData = (data) => {
    localStorage.setItem("appointments", JSON.stringify(data));
  };

  useEffect(() => {
    const localData = getAppointMentData();
    setAppointments(localData);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewAppointment({ ...initialAppointmentValues });
  };
  const handleNewAppointment = (e) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddAppointment = () => {
    const localData = getAppointMentData();



    let newData = {...localData};
    if (localData?.data?.length > 0) {
      newData = {
        data: [...localData.data, { ...newAppointment }],
      };
    } else {
      newData = {
        data: [{ ...newAppointment }],
      };
    }
    setOpen(false)
    setAppointments(newData);
    setAppointMentsData(newData);
  };
  const breadCrumb = {
    list: [
      {
        label: "Home",
        path: "/",
      },
    ],
    current: "Appointment",
  };
  return (
    <SideMenu>
      <Breadcrumb data={breadCrumb} />

      <div elevation={3} className={css.home}>
        <div className={css.headingContainer}>
          <Heading level={1}>Todays Appointments</Heading>
          <div className={css.addAppointment}>
            <Button
              variant="outlined"
              color="primary"
              className={css.button}
              startIcon={<GroupAddIcon />}
              onClick={handleOpen}
            >
              New Appointment
            </Button>
          </div>
        </div>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <Box heading="">
              <div className={css.appointmentCntr}>
                <Appointments
                  handleOpen={handleOpen}
                  appointments={appointments}
                />
              </div>
            </Box>
          </Grid>
          <Grid item md={9}>
            <Box heading="">
              <div className={css.appointmentCntr}>
                <PatientForm />
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
      <Modal heading="New Appointment" open={open} handleClose={handleClose}>
        <AddAppointment
          handleNewAppointment={handleNewAppointment}
          data={newAppointment}
          handleAddAppointment={handleAddAppointment}
        />
      </Modal>
    </SideMenu>
  );
};

export default Home;
