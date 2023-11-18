import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { InageItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    modalOpen: false,
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { image } = this.props;
    const { modalOpen } = this.state;

    return (
      <>
        <li onClick={this.openModal}>
          <InageItem src={image.webformatURL} alt={image.tags}/>
        </li>
        {modalOpen && (
          <Modal
            image={image.largeImageURL}
            isOpen={modalOpen}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}
