import FotoLogo from "../../assets/logo-site.png";
import "./style.css";

export default function Header() {
  return (
    <header className="container-pai">
      <img className="img-logo" src={FotoLogo} alt="Logo do site" />
      <nav className="nav-container">
        <ul className="ul-container">
          <li className="info-li">Personagens</li>
          <li className="info-li">Localizações</li>
          <li className="info-li">Epsódios</li>
        </ul>
      </nav>
    </header>
  );
}
