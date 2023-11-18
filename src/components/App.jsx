import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './GlobalStyle';

import { searchImage } from './Api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { ButtonLoadMore } from './Button/Button';

export const App = () => {
  const [image, setImage] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalImage, setTotalImage] = useState(0);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setLoading(true);
      try {
        const response = await searchImage(query, page);
        const newImages = response.hits.map(
          ({ id, tags, webformatURL, largeImageURL }) => ({
            id,
            tags,
            webformatURL,
            largeImageURL,
          })
        );
        if (newImages.length === 0) {
          return;
        }
        setImage(prevImages => [...newImages, ...prevImages]);
        setTotalImage(response.totalHits);
      } catch (error) {
        setError({ error: 'Щось пішло не так', loading: false });
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [page, query]);

  const handleSearch = query => {
    setQuery(query);
    setPage(1);
    setImage([]);
    setTotalImage(0);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = image => {
    query(image);
  };

  const showButton = !loading && image.length !== totalImage;

  return (
    <Container>
      <Searchbar onSubmit={handleSearch} />
      {error && <p>{error}</p>}
      <ImageGallery images={image} onClick={handleImageClick} />

      {showButton && <ButtonLoadMore buttonLoadMore={handleLoadMore} />}
      {loading && <Loader />}
      <GlobalStyle />
    </Container>
  );
};
