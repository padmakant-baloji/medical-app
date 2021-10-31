import React, { memo } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import css from "./Modal.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  minWidth: "650px",
  borderRadius: "8px",
  outline: "none",
};

const CustomModal = ({ open, handleClose, heading = "", children }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div className={css.icon}>
            <IconButton onClick={handleClose} aria-label="close">
              <CloseIcon color="error" />
            </IconButton>
          </div>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {heading}
          </Typography>
          <div className={css.content}>{children}</div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default memo(CustomModal);
