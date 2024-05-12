import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import "./modal.css";

const PopUp = ({
  isOpen,
  handleCancel,
  handleSubmit,
  words,
  selectedWords,
  setSelectedWords,
  selectedVerse,
}) => {
  return (
    <Modal open={isOpen}>
      <Box className="pop_up">
        <Box id="modal-modal-title" className="modal_title">
          Стих {selectedVerse}
        </Box>
        <Box className="answers_block">
          {words.map((word) => (
            <Box
              className="answer_variant"
              onClick={() =>
                !selectedWords.includes(word) &&
                setSelectedWords((prev) => [...prev, word])
              }
            >
              {word}
            </Box>
          ))}
        </Box>
        {!!selectedWords.length && <Box className="modal_divider" />}
        <Box className="selected_words_block">
          {selectedWords.map((word) => (
            <Box
              className="selected_word"
              onClick={() =>
                setSelectedWords((prev) => prev.filter((el) => el !== word))
              }
            >
              {word}
            </Box>
          ))}
        </Box>
        <Box className="modal_buttons_block">
          <Button onClick={handleSubmit}>Ответить</Button>
          <Button onClick={handleCancel}>Закрыть</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PopUp;
