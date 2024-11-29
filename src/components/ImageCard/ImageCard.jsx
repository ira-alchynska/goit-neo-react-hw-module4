import PropTypes from 'prop-types';
import styles from './ImageCard.module.css';

const ImageCard = ({
    id,
    imageUrlSmall,
    imageUrlRegular,
    altText,
    onClick,
}) => {
    return (
        <li
            key={id}
            className={styles.card}
            onClick={() => onClick(imageUrlRegular)}
        >
            <img src={imageUrlSmall} alt={altText} className={styles.image} />
        </li>
    );
};

ImageCard.propTypes = {
    id: PropTypes.string.isRequired,
    imageUrlSmall: PropTypes.string.isRequired,
    imageUrlRegular: PropTypes.string.isRequired,
    altText: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default ImageCard;
