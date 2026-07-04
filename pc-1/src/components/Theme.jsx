import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { lightTheme, darkTheme, brownTheme } from '../redux/themeSlice';

const Theme = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <div className="theme-card">
      <h2 className="theme-title">
        Active Theme: <span className="theme-highlight">{theme}</span>
      </h2>
      <div className="theme-options">
        <button
          className={`theme-pill-btn ${theme === 'light' ? 'active' : ''}`}
          onClick={() => dispatch(lightTheme())}
        >
          <span className="dot light-dot"></span> Light
        </button>
        <button
          className={`theme-pill-btn ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => dispatch(darkTheme())}
        >
          <span className="dot dark-dot"></span> Dark
        </button>
        <button
          className={`theme-pill-btn ${theme === 'brown' ? 'active' : ''}`}
          onClick={() => dispatch(brownTheme())}
        >
          <span className="dot brown-dot"></span> Brown
        </button>
      </div>
    </div>
  );
};

export default Theme;