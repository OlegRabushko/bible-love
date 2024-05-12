import { Box, Button } from "@mui/material";

function TitleBlock() {
  return (
    <Box className="homepage_title_block">
      <Box className="homepage_title_block_title">
        Исследуй Библию через загадки
      </Box>
      <Box className="homepage_title_block_description">
        Познаем мудрость главной книги вселенной просто, увлекательно и
        эффективно
      </Box>
      <Box className="homepage_buttons_block">
        <Button>Перейти к загадкам</Button>
        <Box>Как это работает</Box>
      </Box>
    </Box>
  );
}

export default TitleBlock;
