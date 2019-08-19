import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client_ID 9b49a872d1987edf74a934f2bc93f9dc313894ab7214dfad56a56fe94336dfe5'
    }
});