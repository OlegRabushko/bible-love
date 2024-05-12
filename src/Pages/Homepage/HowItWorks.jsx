import { Box } from "@mui/material";
import { OneSvg } from "../../assets/one";
import { TwoSvg } from "../../assets/two";
import { ThreeSvg } from "../../assets/three";

const Card = ({ title, description, component: Component }) => {
  return (
    <Box className="how_it_work_card_container">
      <Component />
      <Box className="how_it_work_card_title">{title}</Box>
      <Box className="how_it_work_card_description">{description}</Box>
    </Box>
  );
};

function HowItWorks() {
  return (
    <Box className="how_it_work_block">
      <Box className="how_it_work_title">Как это работает?</Box>
      <Box className="how_it_work_cards">
        <Card
          title="Регистрация на сайте"
          description="Регистрация нужна, чтобы сохранить историю вашего роста"
          component={OneSvg}
        />
        <Card
          title="Получаете доступ к вопросам"
          description="По мере внесения правильных ответов, сложность вопросов увеличивается"
          component={TwoSvg}
        />
        <Card
          title="Самое интересное!"
          description="Отгадываете загадки, познаёте Библию и заработываете очки мудрости"
          component={ThreeSvg}
        />
      </Box>
    </Box>
  );
}

export default HowItWorks;
