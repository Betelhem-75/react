import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  libraryLogo  from '../assets/Library.svg';
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";

const Nav = () => {
    function openMenu() {
        document.body.classList += " menu--open";
    }

    function closeMenu() {
        document.body.classList.remove("menu--open");
    }

    return (
     
        <div className="nav__container">
            <a href="/">
              <img src={libraryLogo} alt="" className="logo" />
            </a>
            <ul className="nav__links">
                <li className="nav__list">
                    <a href="/" className="nav__link">
                        Home
                    </a>
                </li>
                <li className="nav__list">
                    <a href="/" className="nav__link">
                        Books
                    </a>
                </li>
                <button className="btn__menu" onClick={openMenu}>
                   <FontAwesomeIcon icon={faBars} />
                </button>
                <li className="nav__icon">
                  <a href="/cart" className="nav__link">
                     <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                  <span className="cart__length">2</span>
                </li>
            </ul>
            <div className="menu__backdrop">
                <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                   <FontAwesomeIcon icon={faTimes} />
                </button>
                <ul className="menu__links">
                    <li className="menu__list">
                        <a href="/" className="menu__link">
                          Home
                        </a> 
                    </li>
                    <li className="menu__list">
                        <a href="/books" className="menu__link">
                          Books
                        </a> 
                    </li>
                    <li className="menu__list">
                        <a href="/cart" className="menu__link">
                          Cart
                        </a> 
                    </li>
                </ul>
            </div>
        </div>
     
    );
}

export default Nav;