import React from 'react';
import styles from './IconButton.module.css'; // Importando o CSS Module

const IconButton = ({ href, label, children, primary, size }) => {
  const buttonClass = `${styles.buttonIcons} ${primary ? styles.primary : styles.secondary} ${
    size === 'small' ? styles.small : size === 'large' ? styles.large : ''
  }`;

  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={buttonClass}>
      {children}
    </a>
  );
};

export default IconButton;
