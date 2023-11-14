import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {

    return (
      <ImgGallery>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
          />          
        ))}   
      </ImgGallery>
    );
  }