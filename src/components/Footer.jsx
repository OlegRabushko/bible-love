import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./footer.css";
import { VKSvg } from "../assets/vk";
import { Instagram } from "../assets/instagram";

function Footer() {
  return (
    <Box className="footer">
      <Box className="footer_info">
        <Box className="footer_info_mail">probibli.com@gmail.com</Box>
        <Box className="footer_info_links">
          <Link to="https://vk.com/probibli" className="footer_info_link">
            <VKSvg />
          </Link>
          <Link
            to="https://www.instagram.com/probibli/"
            className="footer_info_link"
          >
            <Instagram />
          </Link>
        </Box>
      </Box>
      <Box className="footer_year">© Пробибли 2024 </Box>
    </Box>
  );
}

export default Footer;
