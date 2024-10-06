// src/components/Navbar/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../images/logo.png";
import logoWhite from "../../images/livreiro-white.svg";
import textoLogo from "../../images/livreiro.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Dropdown from '../Dropdown/Dropdown';
import SearchForm from '../SearchForm/SearchForm';
import DarkModeToggle from '../DarkMode/DarkModeToggle';
import authors from '../../data/authors';
import categories from '../../data/categories';
import { useGlobalContext } from '../../context.'; 

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const { isDarkMode } = useGlobalContext();

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`} id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img id="logo-nav" src={logo} alt="site logo" />
            <img id="txt" src={isDarkMode ? logoWhite : textoLogo} alt="site logo" />
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <SearchForm />
        </div>
              
        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
        <div className='capsula'>
        <div className="nav-item dark-mode-mobile"><DarkModeToggle /></div>
          
          <ul className="navbar-nav">
            <li className='text-uppercase text-white'>
              <Dropdown title="Autores" items={authors} basePath="/search/author" />
            </li>
            <li className='nav-item'>
              <Link to="/favorites" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Favoritos</Link>
            </li>
            <li className='text-uppercase text-white'>
              <Dropdown title="Categorias" items={categories} basePath="/category" />
            </li>
            <br></br>
          </ul>
          
          </div>
        </div>
        <div className="dark-mode-desktop"><DarkModeToggle  /></div>
        
      </div>
    </nav>
  );
}

export default Navbar;
