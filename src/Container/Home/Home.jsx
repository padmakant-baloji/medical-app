import { Grid, Button } from "@material-ui/core";
import React from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useSelector } from "react-redux";
import SideMenu from "../../Components/SideMenu/SideMenu";
import css from "./Home.module.scss";
import Box from "../../Components/Box/Box";
import Appointments from "./Components/Appointments/Appointments";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import PatientForm from "../../Components/PatientForm/PatientForm";
import Heading from "../../Components/Heading/Heading";

const Home = () => {
  useSelector((state) => {
    console.log(state);
  });
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
              variant="contained"
              color="primary"
              className={css.button}
              startIcon={<GroupAddIcon />}
            >
              Add Appointment
            </Button>
          </div>
        </div>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <Box heading="">
              <div className={css.appointmentCntr}>
                <Appointments />
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
    </SideMenu>
  );
};

export default Home;
