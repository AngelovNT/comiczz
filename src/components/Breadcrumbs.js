import React from 'react';
import '../styles/Breadcrumbs.css';

const pluralize = (word) => {
  if (word.toLowerCase() === 'comic') return 'Comics';
  if (word.toLowerCase() === 'hardcover') return 'Hardcovers';
  if (word.toLowerCase() === 'digest') return 'Digests';
  if (word.toLowerCase() === 'trade paperback') return 'Trade Paperbacks';
  return word;
};

const Breadcrumbs = ({ selectedFormat }) => {
  return (
    <div className="breadcrumbs">
      {'Home > '}
      <span className="active-breadcrumb">
        {selectedFormat === 'All' ? 'Comics' : pluralize(selectedFormat)}
      </span>
    </div>
  );
};

export default Breadcrumbs;
