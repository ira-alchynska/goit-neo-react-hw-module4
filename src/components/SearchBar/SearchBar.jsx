import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedQuery = query.trim();

        if (trimmedQuery === '') {
            toast.error('Please enter a search term.');
            return;
        }

        if (trimmedQuery.length < 3) {
            toast.error('Search term must be at least 3 characters long.');
            return;
        }

        if (/^\d+$/.test(trimmedQuery)) {
            toast.error('Search term cannot be numbers only.');
            return;
        }

        onSubmit(trimmedQuery);
        setQuery('');
    };

    return (
        <header className={styles.header}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search images and photos"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Search
                </button>
            </form>
        </header>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
