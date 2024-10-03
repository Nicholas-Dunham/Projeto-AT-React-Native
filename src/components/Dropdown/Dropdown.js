// src/components/Dropdown/Dropdown.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Dropdown.css';

const Dropdown = ({ title, items, basePath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleItemClick = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Dividir a lista de items em duas colunas
  const half = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, half);
  const secondHalf = items.slice(half);

  return (
    <nav role="navigation" className="primary-navigation">
      <ul>
        <li className="nav-item text-uppercase text-white fs-22 fw-6 ls-1">
          <span
            className="nav-link"
            onClick={toggleDropdown}
            style={{ cursor: 'pointer' }}
          >
            {title}
          </span>
          {isOpen && (
            <div className="dropdown" ref={dropdownRef}>
              <div className="dropdown-column">
                <ul className="flex flex-column">
                  {firstHalf.map((item) => (
                    <li key={item.id || item.tag}>
                      <span>
                        <Link
                          className="dropdown-item"
                          to={`${basePath}/${item.id || item.tag}`}
                          onClick={handleItemClick}
                        >
                          {item.name}
                        </Link>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dropdown-column">
                <ul className="flex flex-column">
                  {secondHalf.map((item) => (
                    <li key={item.id || item.tag}>
                      <span>
                        <Link
                          className="dropdown-item"
                          to={`${basePath}/${item.id || item.tag}`}
                          onClick={handleItemClick}
                        >
                          {item.name}
                        </Link>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      tag: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  basePath: PropTypes.string.isRequired,
};

export default Dropdown;
