import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>Carros Premium</h1>
        <nav>
          <ul className="list-unstyled d-flex mb-0">
            <li className="mx-3">
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </li>
            <li className="mx-3">
              <Link to="/about" className="text-white text-decoration-none">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
