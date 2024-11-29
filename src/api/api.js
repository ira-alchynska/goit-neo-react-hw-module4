import axios from "axios";
import { toast } from 'react-hot-toast';

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "EQizsOcqVa43Cq1ZVdCokJS8h-GoOqOPoz8FLkdvjF4";


export const fetchImages = async (query, page = 1) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                query,
                page,
                per_page: 12,
                client_id: ACCESS_KEY,
            },
        });


        if (response.data.total === 0) {
            toast.error(`No results found for "${query}". Please try a different term.`);
            return { results: [], total: 0 };
        }

        return response.data;
    } catch (error) {

        toast.error('An error occurred while fetching images. Please try again.');
        console.error('Error fetching images:', error);
        return { results: [], total: 0 };
    }
};

