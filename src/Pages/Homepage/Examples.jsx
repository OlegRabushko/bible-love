import { Box, Button } from "@mui/material";
import mysteryOne from "./../../assets/mystery-1.png";
import mysteryTwo from "./../../assets/mystery-2.png";
import mysteryThree from "./../../assets/mystery-3.png";
import { FireSvg } from "../../assets/fire";

const Card = ({ title, picture }) => {
  return (
    <Box className="examples_card_container">
      <img src={picture} />
      <Box className="examples_card_title">{title}</Box>
      <Box className="examples_card_chapter">Быт. 1</Box>
      <Box className="examples_card_info_block">
        <Box className="examples_card_win_points_block">
          <FireSvg />
          <Box className="examples_card_win_points"> 1 мудрость</Box>
        </Box>
        <Box className="examples_card_user">15 Пользователей угадали</Box>
      </Box>
    </Box>
  );
};

function Examples() {
  return (
    <Box className="examples_block">
      <Box className="examples_block_container">
        <Box className="examples_block_title">Примеры загадок</Box>
        <Box className="examples_cards">
          <Card title="Что ели все звери до потопа?" picture={mysteryOne} />
          <Card title="Назовите второе имя Гедеона?" picture={mysteryTwo} />
          <Card
            title="Сколько человек отгадывали загадку Самсона?"
            picture={mysteryThree}
          />
        </Box>
        <Button>Смотреть все</Button>
      </Box>
    </Box>
  );
}

export default Examples;
