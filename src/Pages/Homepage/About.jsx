import { Box } from "@mui/material";
import photo from "./../../assets/auther.png";

function About() {
  return (
    <Box className="about_block">
      <img src={photo} alt="author" />
      <Box className="about_info_block">
        <Box className="about_info_block_title">Про автора</Box>
        <Box className="about_info_block_author">Юрий Астраленко</Box>
        <Box className="about_info_block_description">
          Нормальный муж, нормальный отец. 16 лет был молодежным пастором,
          занимался подростками и молодёжью. Перечитал Библию от корки до корки
          и не намерен на этом останавливаться
        </Box>
      </Box>
    </Box>
  );
}

export default About;
