import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onImageClick }) => (
    <ul className={styles.gallery}>
        {images.map(({ id, urls, alt_description }) => (
            <ImageCard
                key={id}
                id={id}
                imageUrlSmall={urls.small}
                imageUrlRegular={urls.regular}
                altText={alt_description}
                onClick={onImageClick}
            />
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
