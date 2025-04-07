import React from 'react';
import '../styles/Card.css';

const ComicsCard = ({ comic, onMoreInfo }) => {
  const image = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
  const title = comic.title;
  const prices = comic.prices || [];
  const cheapestPrice = prices.length > 0 ? Math.min(...prices.map(p => p.price)) : 'N/A';

  return (
    <div className="comic-card">
      <img src={image} alt={title} className="comic-thumb" />
      <h3 className="comic-title">{title}</h3>
      <p className="comic-price">Price: ${cheapestPrice}</p>
      <button onClick={() => onMoreInfo(comic)} className="info-button">More Info</button>
    </div>
  );
};

export default ComicsCard;
