import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <Box className="header">
      <Link to="/" className="first_link">
        Главная
      </Link>
      <Link to="/page2">Загадки</Link>
      <Divider className="divider" />
    </Box>
  );
}

export default Header;
