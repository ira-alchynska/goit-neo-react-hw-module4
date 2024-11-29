import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => (
    <ul className={styles.gallery}>
        {images.map(({ id, urls, alt_description }) => (
            <li
                key={id}
                className={styles.card}
                onClick={() => onImageClick(urls.regular)}
            >
                <img
                    src={urls.small}
                    alt={alt_description}
                    className={styles.image}
                />
            </li>
        ))}
    </ul>
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            urls: PropTypes.shape({
                small: PropTypes.string.isRequired,
                regular: PropTypes.string.isRequired,
            }).isRequired,
            alt_description: PropTypes.string,
        })
    ).isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
