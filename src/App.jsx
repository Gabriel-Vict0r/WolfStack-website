import { Outlet } from "react-router-dom";
import NavBar from "./components/Layout/NavBar/NavBar";
import Footer from "./components/Layout/Footer/Footer";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
