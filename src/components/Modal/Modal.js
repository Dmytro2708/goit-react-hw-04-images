import ReactModal from 'react-modal';
import { ImgModal } from './Modal.styled';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '40px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export const Modal = ({ isOpen, onClose, image }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <ImgModal src={image} alt="" />
    </ReactModal>
  );
};
