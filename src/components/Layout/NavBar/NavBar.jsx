import "./navbar.sass";
import { Link } from "react-router-dom";
import logo from "../../../image/wolfStack.svg";
import home from "../../pages/Home/Home.jsx";

//Menu de navegação
const NavBar = () => {
  return (
    <nav className="Header">
      <h1>
        <Link to="/Logo" > <img src={logo}/></Link>
      </h1>
      <ul className="Header-list">
        <li>
          <Link to="/Login">Entrar</Link>
        </li>
        <li>
          <Link to="/Subscribe">Inscreva-se</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portifólio</Link>
        </li>
        <li>
          <Link to="/TalkUs">Fale conosco</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;