import { Box } from "@mui/material";
import photoOne from "./../../assets/feedback-photo-1.png";
import photoTwo from "./../../assets/feedback-photo-2.png";
import photoThree from "./../../assets/feedback-photo-3.png";

const Card = ({ name, location, feedback, picture }) => {
  return (
    <Box className="feedbacks_cards_container">
      <img src={picture} />
      <Box className="feedbacks_card_name">{name}</Box>
      <Box className="feedbacks_card_location">{location}</Box>
      <Box className="examples_card_info_feedback">{feedback}</Box>
    </Box>
  );
};

function Feedbacks() {
  return (
    <Box className="feedbacks_block">
      <Box className="feedbacks_block_title">Отзывы</Box>
      <Box className="feedbacks_cards">
        <Card
          name="Наташа"
          location="Кобрин"
          feedback="Спасибо вам за ваш проект, это портал развивает не только мой ум, но и укрепляет мою веру!"
          picture={photoOne}
        />
        <Card
          name="Светлана"
          location="Минск"
          feedback="Давно не читала Библию, но когда зарегистрировалась у вас не могла оторваться. За трое суток получила 200 мудростей"
          picture={photoTwo}
        />
        <Card
          name="Гога"
          location="Тбилиси"
          feedback="Когда я вижу Аксакала, держащего саблю, это мне напоминает ваш проект! Как слово Божье проникает в душу, как обоюдоострый меч!"
          picture={photoThree}
        />
      </Box>
      <Box className="feedbacks_block_title">Probibli в цифрах</Box>
      <Box className="feedbacks_info_block">
        <Box className="feedbacks_info_block_block">
          <Box className="feedbacks_info_block_block_count">84543</Box>
          <Box className="feedbacks_info_block_block_message">
            Отгадано загадок
          </Box>
        </Box>
        <Box className="feedbacks_info_block_block">
          <Box className="feedbacks_info_block_block_count">17</Box>
          <Box className="feedbacks_info_block_block_message">Эпизодов</Box>
        </Box>
        <Box className="feedbacks_info_block_block">
          <Box className="feedbacks_info_block_block_count">529</Box>
          <Box className="feedbacks_info_block_block_message">Загадок</Box>
        </Box>
        <Box className="feedbacks_info_block_block">
          <Box className="feedbacks_info_block_block_count">7071</Box>
          <Box className="feedbacks_info_block_block_message">
            Исследователей
          </Box>
        </Box>
        <Box className="feedbacks_info_block_block">
          <Box className="feedbacks_info_block_block_count">15</Box>
          <Box className="feedbacks_info_block_block_message">
            Сейчас исследуют
          </Box>
        </Box>
        <Box className="feedbacks_info_block_gradient" />
      </Box>
    </Box>
  );
}

export default Feedbacks;
