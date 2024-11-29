import { useState, useEffect } from 'react';
import SearchBar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';
import { fetchImages } from './js/api';
import './App.css';

const App = () => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchImages(query, page);
                setImages((prevImages) => [...prevImages, ...data.results]);
            } catch (err) {
                console.error('Error fetching images:', err);
                setError('Failed to fetch images. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query, page]);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setImages([]);
        setPage(1);
    };

    const loadMore = () => setPage((prevPage) => prevPage + 1);

    const openModal = (image) => setSelectedImage(image);

    const closeModal = () => setSelectedImage(null);

    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
            {error && <ErrorMessage message={error} />}
            <ImageGallery images={images} onImageClick={openModal} />
            {loading && <Loader />}
            {images.length > 0 && !loading && (
                <LoadMoreBtn onClick={loadMore} />
            )}
            <Toaster></Toaster>
            {selectedImage && (
                <ImageModal
                    isOpen={!!selectedImage}
                    image={selectedImage}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default App;
