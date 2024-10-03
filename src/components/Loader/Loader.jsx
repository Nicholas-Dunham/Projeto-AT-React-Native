// loader.js

import React, { useEffect, useState } from 'react';
import './Loader.css';
import { useGlobalContext } from '../../context.'; 

const Loader = () => { // Removendo a prop onComplete
  const [progress, setProgress] = useState(0);
  const { isDarkMode } = useGlobalContext();
  
  useEffect(() => {
    let isMounted = true;
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100 && isMounted) {
          clearInterval(interval);
          return 100; // Garante que o progresso finaliza em 100%
        }
        return oldProgress + 5; // Incremento de 5% a cada 100ms
      });
    }, 100); 

    return () => {
      isMounted = false; // Evita chamadas após o desmonte
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`loader-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="progress-circle">
        <div className="circle-progress" style={{ '--progress': progress }}></div>
        <div className="progress-text">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader;
