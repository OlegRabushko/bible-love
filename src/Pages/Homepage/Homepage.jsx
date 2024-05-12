import { Box } from "@mui/material";
import "./homepage.css";
import { Circle } from "../../assets/circle";
import bible from "./../../assets/bible.png";
import search from "./../../assets/search.png";
import TitleBlock from "./TitleBlock";
import ProbibleBlock from "./ProbibleBlock";
import HowItWorks from "./HowItWorks";
import About from "./About";
import Examples from "./Examples";
import Feedbacks from "./Feedbacks";

function Homepage() {
  return (
    <Box className="homepage">
      <Circle />
      <Box className="homepage_container"></Box>
      <img src={search} alt="search" className="search_img" />
      <img src={bible} alt="bible" className="bible_img" />
      <TitleBlock />
      <ProbibleBlock />
      <HowItWorks />
      <About />
      <Examples />
      <Feedbacks />
    </Box>
  );
}

export default Homepage;
