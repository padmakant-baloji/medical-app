import { Grid, Button } from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useSelector } from "react-redux";
import moment from "moment";
import { v1 as uuid } from "uuid";
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
  };
  const [newAppointment, setNewAppointment] = useState({
    ...initialAppointmentValues,
  });

  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);
  const [appointmentObj, setAppointmentObj] = useState({});


  const setSelectedAppointmentObj = useCallback((appointmentId) => {
    const selectedAppointment = appointments?.data?.find(
      (x) => x.id === appointmentId
    );

    setAppointmentObj(selectedAppointment);
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

  const handleAppintmentClick = (data) => {
    setSelectedAppointmentId(data.id);
    setSelectedAppointmentObj(data.id);
  };

  useEffect(() => {
    const localData = getAppointMentData();
    setAppointments(localData);
    if (localData?.data?.length > 0) {
      const id = localData?.data[0].id;
      setSelectedAppointmentId(id);
    }
  }, []);

  useEffect(() => {
    setSelectedAppointmentObj(selectedAppointmentId);
  }, [selectedAppointmentId, setSelectedAppointmentObj]);

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
    const newAppointmentData = {
      ...newAppointment,
      date: moment(),
      id: uuid(),
    };

    let newData = { ...localData };
    if (localData?.data?.length > 0) {
      newData = {
        data: [...localData.data, { ...newAppointmentData }],
      };
    } else {
      newData = {
        data: [{ ...newAppointmentData }],
      };
      setSelectedAppointmentId(newAppointmentData.id);
    }
    handleClose();
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
                  handleAppintmentClick={handleAppintmentClick}
                  selectedAppointmentId={selectedAppointmentId}
                />
              </div>
            </Box>
          </Grid>
          <Grid item md={9}>
            <Box heading="">
              <div className={css.appointmentCntr}>
                <PatientForm selectedAppointment={appointmentObj} />
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
