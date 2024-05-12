import { Route, Routes, BrowserRouter } from "react-router-dom";
import Page2 from "./Pages/Page2/Page2";
import Homepage from "./Pages/Homepage/Homepage";
import Header from "./components/Header";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import QuestionOne from "./Pages/QuestionOne/Question";
import QuestionTwo from "./Pages/QuestionTwo/Question";
import QuestionThree from "./Pages/QuestionThree/Question";

function App() {
  return (
    <BrowserRouter basename="/">
      <Box className="container">
        <Box className="app_container">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/question-1" element={<QuestionOne />} />
            <Route path="/question-2" element={<QuestionTwo />} />
            <Route path="/question-3" element={<QuestionThree />} />
          </Routes>
          <Footer />
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
