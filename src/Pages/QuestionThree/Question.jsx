import { useState } from "react";
import PopUp from "../../components/Modal";
import { Genesis } from "../../store/bible";
import "./Question.css";
import WinModal from "../../components/WinModal";
import FailModal from "../../components/FailModal";
import { Box, Typography } from "@mui/material";
import { FireSvg } from "../../assets/fire";

function removeSpecialChars(str) {
  return str.replace(/[".,:;#$%!-]/g, "");
}

function checkAnswer(rightAnswer, answer) {
  console.log(rightAnswer.words.stringify, answer);
  return JSON.stringify(rightAnswer) === JSON.stringify(answer);
}

function Question() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenStatusModal, setIsOpenStatusModal] = useState(false);
  const [words, setWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [selectedVerse, setSelectedVers] = useState(0);

  const answer = {
    row: 17,
    words: ["для", "управления", "днём"],
  };

  const handleOpen = (el, i) => {
    setSelectedVers(i + 1);
    setWords(removeSpecialChars(el).split(" "));
    setIsOpen(true);
  };
  const handleCancel = () => {
    setSelectedWords([]);
    setIsOpen(false);
  };

  const handleSubmit = () => {
    setIsOpen(false);
    setIsOpenStatusModal(true);
  };

  const closeStatusModal = () => {
    setSelectedWords([]);
    setIsOpenStatusModal(false);
  };

  return (
    <Box>
      <Box className="chapter_block">
        <Box className="question_block">
          <Box className="question_block_title">
            Для чего было сотворено солнце?
          </Box>
          <Box className="question_block_info">
            <Box className="question_block_info_poins">
              <FireSvg />
              <Box className="question_block_info_poins_text">1 Мудрость</Box>
            </Box>
            <Box className="question_block_info_users">
              15 Пользователей угадали
            </Box>
          </Box>
        </Box>

        <Box className="chapter_block_container">
          <Box className="chapter_block_container_title">Область поиска</Box>
          <Box className="chapter_block_container_description">
            Выберите стих, где вы предполагаете находится ответ
          </Box>
          <Box className="chapter_block_container_chapter_title">
            {Genesis.title}
          </Box>
          {Genesis.rows.map((el, i) => {
            return (
              <Box
                className="chapter_block_container_chapter_row"
                onClick={() => handleOpen(el, i)}
              >
                <Typography>{`${i + 1}. `}</Typography>
                <Typography>{el}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <PopUp
        isOpen={isOpen}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        words={words}
        selectedWords={selectedWords}
        setSelectedWords={setSelectedWords}
        setSelectedVers={setSelectedVers}
        selectedVerse={selectedVerse}
      />
      {isOpenStatusModal &&
      !!checkAnswer(answer, { row: selectedVerse, words: selectedWords }) ? (
        <WinModal isOpen={isOpenStatusModal} handleClose={closeStatusModal} />
      ) : (
        <FailModal isOpen={isOpenStatusModal} handleClose={closeStatusModal} />
      )}
    </Box>
  );
}

export default Question;
