import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Services from "./components/pages/Services/Services";
import Subscribe from "./components/pages/Subscribe/Subscribe";
import TalkUs from "./components/pages/TalkUs/TalkUs";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Subscribe" element={<Subscribe />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/TalkUs" element={<TalkUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
