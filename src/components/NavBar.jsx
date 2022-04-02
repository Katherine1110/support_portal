import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-tabs ">
        <div className="container-fluid">
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
                <NavLink to="/" className="nav-link" activeclassname="selected" aria-current="page">
                  Головна
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/donation" activeclassname="selected" className="nav-link">
                  Задонатити
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/activity" activeclassname="selected" className="nav-link">
                  Наша діяльність
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shelter" activeclassname="selected" className="nav-link">
                  Сховище
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/areas-of-activity" activeclassname="selected" className="nav-link">
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
