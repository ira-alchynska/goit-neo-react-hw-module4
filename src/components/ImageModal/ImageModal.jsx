import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styles from './ImageModal.module.css';

const ImageModal = ({ isOpen, image, onClose }) => (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={styles.modal}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
    >
        <button className={styles.closeButton} onClick={onClose}>
            &times;
        </button>
        <img src={image} alt="Large view" className={styles.image} />
    </Modal>
);

ImageModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImageModal;
