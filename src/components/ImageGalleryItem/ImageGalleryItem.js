import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { InageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  const [modalOpen, setmodalOpen] = useState(false);

  const openModal = () => {
    setmodalOpen(true);
  };

  const closeModal = () => {
    setmodalOpen(false);
  };

  return (
    <>
      <li onClick={openModal}>
        <InageItem src={image.webformatURL} alt={image.tags} />
      </li>
      {modalOpen && (
        <Modal
          image={image.largeImageURL}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
};
