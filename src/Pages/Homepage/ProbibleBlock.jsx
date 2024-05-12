import { Box } from "@mui/material";
import { PositiveStatus } from "../../assets/positive-status";

const Card = ({ description }) => {
  return (
    <Box className="probible_card_container">
      <Box className="probible_card">
        <Box className="probible_card_status">
          <PositiveStatus />
        </Box>
        <Box className="probible_card_description">{description}</Box>
      </Box>
      <Box className="probible_card_gradient" />
    </Box>
  );
};

function ProbibleBlock() {
  return (
    <Box className="probible_block">
      <Box className="probible_info_block">
        <Box className="probible_info_title">Что такое Probibli?</Box>
        <Box className="probible_info_description">
          Проект направлен на то, чтобы привить молодым людям любовь к изучению
          Библии, заинтересовать к постоянному и внимательному изучению.
        </Box>
      </Box>
      <Card description="Сборник загадок по всем главам библии" />
      <Card description="Авторская методика исследования Писания Bible&Love" />
      <Card description="Не просто чтение, а интерактивная игра" />
      <Card description="Увлекательное и полезное занятие для детей и взрослых" />
      <Card description="Познание Библии с любовью и без принуждения" />
    </Box>
  );
}

export default ProbibleBlock;
