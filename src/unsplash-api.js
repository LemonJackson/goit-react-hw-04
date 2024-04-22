import axios from 'axios';

axios.defaults.baseURL = "https://api.unsplash.com";

export async function fetchData(searchQuery, page) {
    const response = await axios.get('/search/photos', {
        params: {
            client_id: 'S9NP8YRaJo7PNPRR46qsCJ3DqfuJyjq6sTtE3mAiils',
            orientation: "landscape",
            query: searchQuery,
            per_page: 12,
            page: page,
        },
    });
    return response.data;
};