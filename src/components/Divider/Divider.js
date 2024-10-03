import React from 'react';
import './Divider.css';
import { useGlobalContext } from '../../context.'; 

const Divider = () => {
  const { isDarkMode } = useGlobalContext();
  return <div className='container'><hr className={`divider ${isDarkMode ? 'dark' : 'light'}`} /></div>;
};

export default Divider;
