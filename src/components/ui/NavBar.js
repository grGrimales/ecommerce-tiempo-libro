import React, { useState, useEffect } from "react";
import { CartWidget } from "../cart/CartWidget";

import { NavLink } from "react-router-dom";
import logo from "../../images/Copia de logo-tiempo-libro.png";
import { getCategories } from "../services/firebase/firestore";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [categories, setCategories] = useState([]);

  const handleClick = () => setClick(!click);

  const handleClickDropdown = () => setDropdown(!dropdown);

  useEffect(() => {
    getCategories().then((result) => {
      setCategories(result);
    });
  }, []);

  return (
    <>
      <header className="header">
        <NavLink to="/" className="header__link">
          <img className="header__logo" src={logo} alt="logo" />
        </NavLink>

        <nav className="header__navegation">
          <div className="header__icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav activeUl" : "nav"}>
            <li className="nav__item" onClick={handleClick}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav__links ${isActive ? "nav__links--active" : "nav__links"}`
                }
              >
                Inicio
              </NavLink>
            </li>

            <li className="nav__item" onClick={handleClickDropdown}>
              {/*  */}
              Libros <i className="fas fa-angle-down"></i>
              <ul className={dropdown ? "listDropdown hide" : "listDropdown"}>
                <li>
                  {categories.map((cat) => (
                    <NavLink
                      className="nav__links"
                      onClick={handleClick}
                      key={cat.id}
                      to={`/category/${cat.description}`}
                    >
                      {cat.description}
                    </NavLink>
                  ))}
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `nav__links ${isActive ? "nav__links--active" : "nav__links"}`
                }
              >
                <CartWidget />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
