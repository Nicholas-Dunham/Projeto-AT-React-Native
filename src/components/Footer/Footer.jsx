import React from 'react';
import './Footer.css';
import { FaMapMarker, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import textoLogo from "../../images/livreiro-white.svg";
import { useGlobalContext } from '../../context.'; 
import IconButton from './IconButton';

const Footer = () => {
  const { isDarkMode } = useGlobalContext();
  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
    <footer className="footer-distributed">
      <div className="footer-left">
        <div className='logo-footer'>
        <img src={textoLogo} alt="site logo" />
        </div>

        <p className="footer-links">
          <Link to="/">Home</Link>
          <span>·</span>
          <Link to="/favorites">Favoritos</Link>
          <span>·</span>
          <Link to="#faq">Faq</Link>
          <span>·</span>
        </p>

        <p className="footer-company-name">Nicholas Dunham &copy; {new Date().getFullYear()}</p>
      </div>

      <div className="footer-center">
        <div className='contato-info'>
          <FaMapMarker className="footer-icon" />
          <p>
            <span>Niterói</span> Rio de Janeiro, Brasil
          </p>
        </div>

        <div className='contato-info'>
          <FaPhone className="footer-icon" />
          <p>(21) 96732-8080</p>
        </div>

        <div className='contato-info'>
          <FaEnvelope className="footer-icon" />
          <p>
            <a href="mailto:support@company.com">nicholas.dunham@al.infnet.edu.br</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>Sobre o Projeto</span>
          Projeto desenvolvido para a avaliação de React-Native em 10/2024
        </p>

        <div className="footer-icons">
      <IconButton href="https://www.linkedin.com/in/nicholas-dunham-27ab17239/" label="LinkedIn" primary size="small">
        <FaLinkedin />
      </IconButton>
      <IconButton href="https://github.com/Nicholas-Dunham" label="GitHub" size="large">
        <FaGithub />
      </IconButton>
    </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
