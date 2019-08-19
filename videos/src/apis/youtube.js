import axios from 'axios';

const KEY = 'AIzaSyCy8fbDR09vIjlJ4vi-AYFsj4L70D_Rbfw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});