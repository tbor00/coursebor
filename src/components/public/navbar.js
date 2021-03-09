import Logo from "../../img/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-bg navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="" className="logo" />
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Cursos
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                ¿Qué es Coursebor?
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Hablá con nosotros
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2 radius"
                type="search"
                placeholder="Buscá tu curso"
                aria-label="Search"
              />
            </form>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
