import React, { useState } from "react";
import { CartWidget } from "../CartWidget";

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header">
        <h2 className="header__title">Tiempo Libro</h2>
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
              <a className="nav__links" href="#">
                {" "}
                Libros
              </a>

              {/* <ul>
                <li>Inicio</li>
                <li>Inicio</li>
                <li>Inicio</li>
              </ul> */}
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
