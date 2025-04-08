import React, { useEffect, useState } from 'react';
import { fetchComics } from '../api/marvelApi';

import ComicsCard from '../components/ComicsCard';
import ComicsPopup from '../components/ComicsPopup';
import Header from '../components/Header';
import '../styles/ComicsPage.css'

const ComicsPage = () => {
  const [comics, setComics] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState('All');

  useEffect(() => {
    const getComics = async () => {
      try {
        const data = await fetchComics();
        setComics(data);
      } catch (err) {
        console.error(err);
      }
    };

    getComics();
  }, []);

  const handleMoreInfo = (comic) => setSelectedComic(comic);
  const closePopup = () => setSelectedComic(null);
  const handleFormatChange = (format) => setSelectedFormat(format);

  const filteredComics = selectedFormat === 'All'
    ? comics
    : comics.filter(c => c.format?.toLowerCase() === selectedFormat.toLowerCase());

  return (
    <div className="comics-container">
      <Header selectedFormat={selectedFormat} onSelectFormat={handleFormatChange} />
      <div className="comics-grid">
        {filteredComics.map((comic) => (
          <ComicsCard key={comic.id} comic={comic} onMoreInfo={handleMoreInfo} />
        ))}
      </div>
      {selectedComic && <ComicsPopup comic={selectedComic} onClose={closePopup} />}
    </div>
  );
};

export default ComicsPage;
