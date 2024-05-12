import { Box, Button, Modal, Typography } from "@mui/material";
import "./modal.css";
import { FireSvg } from "../assets/fire";

const WinModal = ({ isOpen, handleClose }) => {
  return (
    <Modal open={isOpen}>
      <Box className="pop_up">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Победа!
        </Typography>
        <div style={{ display: "flex", marginTop: "5px", gap: "10px" }}>
          <Typography>+1</Typography>
          <FireSvg />
        </div>
        <Box className="modal_fail">
          <Button onClick={handleClose} className="fail">
            Закрыть
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default WinModal;
