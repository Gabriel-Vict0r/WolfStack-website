import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const GlobalRoute = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Subscribe" element={<Subscribe />} />
          {/* <Route path="/Services" element={<Services />} /> */}
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/TalkUs" element={<TalkUs />} />
        </Routes>
    </Router>
  );
};
export default GlobalRoute;