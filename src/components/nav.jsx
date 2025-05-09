import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  libraryLogo  from '../assets/Library.svg';
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { Link } from "react-router-dom";

const Nav = ({ numberOfItems }) => {
    function openMenu() {
        document.body.classList += " menu--open";
    }

    function closeMenu() {
        document.body.classList.remove("menu--open");
    }

    return (
     
        <div className="nav__container">
            <Link to="/">
              <img src={libraryLogo} alt="" className="logo" />
            </Link>
            <ul className="nav__links">
                <li className="nav__list">
                    <Link to="/" className="nav__link">
                        Home
                    </Link>
                </li>
                <li className="nav__list">
                    <Link to="/" className="nav__link">
                        Books
                    </Link>
                </li>
                <button className="btn__menu" onClick={openMenu}>
                   <FontAwesomeIcon icon={faBars} />
                </button>
                <li className="nav__icon">
                  <Link to="/cart" className="nav__link">
                     <FontAwesomeIcon icon={faShoppingCart} />
                  </Link>
                  {
                    numberOfItems > 0 &&  <span className="cart__length">{numberOfItems}</span>
                  }
                </li>
            </ul>
            <div className="menu__backdrop">
                <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                   <FontAwesomeIcon icon={faTimes} />
                </button>
                <ul className="menu__links">
                    <li className="menu__list">
                        <Link to="/" className="menu__link">
                          Home
                        </Link> 
                    </li>
                    <li className="menu__list">
                        <Link to="/books" className="menu__link">
                          Books
                        </Link> 
                    </li>
                    <li className="menu__list">
                        <Link to="/cart" className="menu__link">
                          Cart
                        </Link> 
                    </li>
                </ul>
            </div>
        </div>
     
    );
}

export default Nav;