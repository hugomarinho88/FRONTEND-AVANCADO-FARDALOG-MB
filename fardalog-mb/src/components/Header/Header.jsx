import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        ⚓ FardaLog MB
      </div>

      <nav>

        <Link to="/">Início</Link>

        <Link to="/catalogo">Catálogo</Link>

      </nav>

    </header>
  );
}

export default Header;