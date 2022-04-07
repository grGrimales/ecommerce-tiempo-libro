import React, { useState, useEffect } from "react";
import { CartWidget } from "../CartWidget";

import {NavLink} from 'react-router-dom'
import logo from "../../images/logo-tiempo-libro.png";
import { getCategories } from "../../products/products";
export const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [categories, setCategories] = useState([])

  const handleClick = () => setClick(!click);
  const handleClickDropdown = () => setDropdown(!dropdown);

  useEffect(() => {
    
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])

  return (
    <>
      <header className="header">
        {/* <h2 className="header__title">Tiempo Libro</h2> */}

        <NavLink to="/">
            <img className="header__logo" src={logo} alt="logo" />
            
        </NavLink>
        <nav className="header__navegation">
          <div className="header__icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav active" : "nav"}>
            <li className="nav__item">
            <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav__links ${isActive ? "nav__links--active" : "nav__links"}`
                }
              >
                Inicio
              </NavLink>
              
              
            </li>

            <li className="nav__item">
              <a className="nav__links" href="#" onClick={handleClickDropdown}>
                {" "}
                Libros <i className="fas fa-angle-down"></i>
              </a>
              <ul className={dropdown ? "listDropdown hide" : "listDropdown"}>
              
              
                <li>
                { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
          >{cat.description}</NavLink>)}
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
