import "./Nav.css";
import logo_nav from "../../assets/img/logo_Nav.png";

const Nav = (props) => {
  console.log(props);
  return (
    <div className="wrapper__navbar">
      <div className="navbar">
        <div className="navbar__section--1">
          <img src={logo_nav} className="navbar__logo" />
        </div>

        <div className="navbar__section--2">
          <ul class="navbar__ul">
            <li class="navbar__li">
              <a class="navbar__a" href="#">
                INICIO
              </a>
            </li>
            <li class="navbar__li">
              <a class="navbar__a" href="#">
                ABOUT
              </a>
            </li>
            <li class="navbar__li">
              <a class="navbar__a" href="#">
                PROYECTOS
              </a>
            </li>
            <li class="navbar__li">
              <a class="navbar__a" href="#">
                CONTACTO
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar__section--3">
          <i class="fa-brands fa-github-square"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-whatsapp-square"></i>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
