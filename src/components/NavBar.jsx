import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import LogoSVG from '../images/LogoSVG.svg';

function NavBar() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}
                  aria-current="page">
                  Головна
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/donation"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}
                  className="nav-link">
                  Задонатити
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  to="/activity"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}
                  className="nav-link">
                  Наша діяльність
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/shelter"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}
                  className="nav-link">
                  Сховище
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/areas-of-activity"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}
                  className="nav-link">
                  Завдання та напрямками діяльності Організації
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <ul className="nav justify-content-center">
        <li>
          <Link to="/" className="nav-link active" aria-current="page">
            <img className="mx-auto d-block" src={Logo} alt="Logo" width={200} height={200} />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">
            Intro
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/donation" className="nav-link">
            Donation
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/activity" className="nav-link">
            Activity
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/shelter" className="nav-link">
            Shelter
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/areas-of-activity" className="nav-link">
            Areas of activity
          </Link>
        </li>
      </ul> */}
    </div>
  );
}

export default NavBar;
