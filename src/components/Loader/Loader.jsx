import React, { useEffect, useState } from 'react';
import './Loader.css';
import { useGlobalContext } from '../../context.'; 

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const { isDarkMode } = useGlobalContext();
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          onComplete(); // Chama a função de callback quando o progresso atinge 100%
          return 100;
        }
        return oldProgress + 5; // Simula o progresso de carregamento
      });
    }, 100); // Atualiza a cada 100ms

    return () => clearInterval(interval);
  }, [onComplete]);

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
