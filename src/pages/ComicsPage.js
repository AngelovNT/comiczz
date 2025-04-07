import React, { useEffect, useState } from 'react';
import { fetchComics } from '../api/marvelApi';

import Card from '../components/ComicsCard'
import '../styles/ComicsPage.css'

const ComicsPage = () => {
  const [comics, setComics] = useState([]);

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

  return (
    <div>
      <h1>Welcome!</h1>
      <div>
        {comics.map((comic) => (
          <Card key={comic.id} comic={comic} onMoreInfo={(data) => console.log('more info!', data)} />
        ))}
      </div>
    </div>
  );
};

export default ComicsPage;
