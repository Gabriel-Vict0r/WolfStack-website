import "./navbar.sass";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="Header">
      <ul className="Header-list">
        <li>
          <Link to="/">Home</Link>
        </li>
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