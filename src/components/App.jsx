import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './GlobalStyle';

import { searchImage } from './Api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { ButtonLoadMore } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    error: null,
    totalImages: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      this.setState({ loading: true });
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
        this.setState(prevState => ({
          images: [...newImages, ...prevState.images],
          totalImages: response.totalHits,
        }));
      } catch (error) {
        this.setState({ error: 'Щось пішло не так', loading: false });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSearch = async query => {
    if (this.state.query === query) {
      return;
    }
    this.setState({
      query,
      page: 1,
      images: [],
      totalImages: 0,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = image => {
    this.setState({ selectedImage: image });
  };

  render() {
    const { images, error, loading, totalImages } = this.state;
    const showButton = !loading && images.length !== totalImages;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearch} />
        {error && <p>{error}</p>}
        <ImageGallery images={images} onClick={this.handleImageClick} />

        {showButton && <ButtonLoadMore buttonLoadMore={this.handleLoadMore} />}
        {loading && <Loader />}
        <GlobalStyle />
      </Container>
    );
  }
}
