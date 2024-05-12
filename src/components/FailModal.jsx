import { Box, Button, Modal, Typography } from "@mui/material";
import "./modal.css";

const FailModal = ({ isOpen, handleClose }) => {
  return (
    <Modal open={isOpen}>
      <Box className="pop_up">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Неверно! Попробуй ещё раз
        </Typography>
        <Box className="modal_fail">
          <Button onClick={handleClose} className="fail">
            Закрыть
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FailModal;
