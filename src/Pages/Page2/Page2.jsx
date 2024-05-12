import "./Page2.css";
import { Box } from "@mui/material";
import mysteryOne from "./../../assets/mystery-1.png";
import { FireSvg } from "../../assets/fire";
import { Link } from "react-router-dom";

const Card = ({ title, picture, link }) => {
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
        <Link to={link} className="examples_button">
          Открыть
        </Link>
      </Box>
    </Box>
  );
};

function Page2() {
  return (
    <Box>
      <Box className="cards_container">
        <Card
          title="Что ели все звери до потопа?"
          picture={mysteryOne}
          link="/question-1"
        />
        <Card
          title="Что из сотворённого старше всех?"
          picture={mysteryOne}
          link="/question-2"
        />
        <Card
          title="Для чего было сотворено солнце?"
          picture={mysteryOne}
          link="/question-3"
        />
      </Box>
    </Box>
  );
}

export default Page2;
