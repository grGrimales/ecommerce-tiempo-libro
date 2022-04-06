import React, { useState } from "react";
import { CartWidget } from "../CartWidget";
import logo from "../../images/logo-tiempo-libro.png";
export const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClickDropdown = () => setDropdown(!dropdown);

  return (
    <>
      <header className="header">
        {/* <h2 className="header__title">Tiempo Libro</h2> */}

        <img className="header__logo" src={logo} alt="logo" />
        <nav className="header__navegation">
          <div className="header__icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav active" : "nav"}>
            <li className="nav__item">
              <a className="nav__links" href="#">
                Inicio
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__links" href="#" onClick={handleClickDropdown}>
                {" "}
                Libros <i className="fas fa-angle-down"></i>
              </a>
              <ul className={dropdown ? "listDropdown hide" : "listDropdown "}>
                <li>
                  <a href="#"> Categoría1 </a>
                </li>
                <li>
                  <a href="#"> Categoría2 </a>
                </li>

                <li>
                  <a href="#"> Categoría3 </a>
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <a className="nav__links" href="#">
                {" "}
                Nosotros
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__links" href="#">
                {" "}
                Contacto
              </a>
            </li>
            <li className="nav__item">
              <CartWidget />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
