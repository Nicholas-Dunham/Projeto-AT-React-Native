import React from 'react';
import './VideoSection.css';
import { useGlobalContext } from '../../context.'; 

const VideoSection = ({ title, videoLinks }) => {
  const { isDarkMode } = useGlobalContext();
  return (
    <section className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      <h2 className="carousel-title">{title}</h2>
      <div className="video-container">
        {videoLinks.map((link, index) => (
          <div className="video-item" key={index}>
            <iframe 
              width="100%" 
              height="315" 
              src={link} 
              title={`YouTube video player ${index}`} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
