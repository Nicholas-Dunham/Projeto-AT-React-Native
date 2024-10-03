import "./DarkModeToggle.css";
import { useGlobalContext } from '../../context.'; 

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useGlobalContext();

  return (
    <div className="toggle-container">
      <label className="switch">
        <input 
          type="checkbox" 
          checked={isDarkMode} 
          onChange={toggleDarkMode} 
        />
        <span className="slider">
          <span className="light-back"></span>
        </span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
