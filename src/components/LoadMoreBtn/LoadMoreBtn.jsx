import PropTypes from 'prop-types';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
    <button className={styles.button} onClick={onClick}>
        Load more
    </button>
);

LoadMoreBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
