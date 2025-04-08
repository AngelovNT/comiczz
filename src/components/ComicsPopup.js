import React from 'react';
import '../styles/ComicsPopup.css'

const ComicPopup = ({ comic, onClose }) => {
  if (!comic) return null;

  const thumbnail = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
  const focDate = comic.dates.find(date => date.type === 'focDate')?.date || 'N/A';
  const creators = comic.creators?.items.map(c => c.name).join(', ') || 'N/A';
  const characters = comic.characters?.items.map(c => c.name).join(', ') || 'N/A';

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={thumbnail} alt={comic.title} className="popup-thumbnail" />
        <h2>{comic.title}</h2>
        <p><strong>Release Date:</strong> {new Date(focDate).toLocaleDateString()}</p>
        <p><strong>Format:</strong> {comic.format || 'N/A'}</p>
        <p><strong>Pages:</strong> {comic.pageCount || 'N/A'}</p>
        <p><strong>Characters:</strong> {characters}</p>
        <p><strong>Creators:</strong> {creators}</p>
        <p><strong>Diamond Code:</strong> {comic.diamondCode || 'N/A'}</p>
      </div>
    </div>
  );
};

export default ComicPopup;
