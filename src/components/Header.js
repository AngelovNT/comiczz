import React from 'react';
import '../styles/Header.css'

const formats = ['All', 'Comic', 'Hardcover', 'Digest', 'Trade Paperback'];

const Header = ({ selectedFormat, onSelectFormat }) => {
  return (
    <header className="header">
      <div className="format-buttons">
        {formats.map((format) => (
          <button
            key={format}
            onClick={() => onSelectFormat(format)}
            className={`format-btn ${selectedFormat === format ? 'active' : ''}`}
          >
            {format}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
