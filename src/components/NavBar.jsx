import { NavLink } from 'react-router-dom';
import Logo from '../images/logo_support.png';

function NavBar() {
  const navBar = document.querySelector('.navbar-collapse');
  const handleClick = () => {
    navBar.collapse('hide');
  };

  return (
    <div className="container mb-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-tabs ">
        <div className="container-fluid">
          <NavLink to={'/what_we_need'} className="navbar-brand">
            <img src={Logo} alt="Logo" width={80} height={100} />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  onClick={handleClick}
                  className="nav-link"
                  activeclassname="selected"
                  aria-current="page">
                  Головна
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/what_we_need"
                  onClick={handleClick}
                  activeclassname="selected"
                  className="nav-link">
                  Актуальні потреби
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/donation"
                  onClick={handleClick}
                  activeclassname="selected"
                  className="nav-link">
                  Задонатити
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/activity"
                  onClick={handleClick}
                  activeclassname="selected"
                  className="nav-link">
                  Наша діяльність
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/shelter"
                  onClick={handleClick}
                  activeclassname="selected"
                  className="nav-link">
                  Сховище
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/areas-of-activity"
                  onClick={handleClick}
                  activeclassname="selected"
                  className="nav-link">
                  Завдання та напрямками діяльності Організації
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
