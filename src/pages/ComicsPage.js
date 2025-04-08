import React, { useEffect, useState } from 'react';
import { fetchComics } from '../api/marvelApi';

import ComicsCard from '../components/ComicsCard';
import ComicsPopup from '../components/ComicsPopup';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';

import '../styles/ComicsPage.css'

const ComicsPage = () => {
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedComic, setSelectedComic] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState('All');

  const loadComics = async (newOffset = 0) => {
    setLoading(true);
    try {
      const data = await fetchComics(newOffset);
      setComics(prev => [...prev, ...data]);
      setOffset(newOffset + 20);
    } catch (err) {
      console.error('Failed to fetch comics:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComics();
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
      <Breadcrumbs selectedFormat={selectedFormat} />
      <div className="comics-grid">
        {filteredComics.map((comic) => (
          <ComicsCard key={comic.id} comic={comic} onMoreInfo={handleMoreInfo} />
        ))}
      </div>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={() => loadComics(offset)} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
      {selectedComic && <ComicsPopup comic={selectedComic} onClose={closePopup} />}
    </div>
  );
};

export default ComicsPage;
