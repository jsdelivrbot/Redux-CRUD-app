import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";

const ROOT_URL = "http://reduxblog.herokuapp.com/api/";
const API_KEY = '?key=randomStringChars2606';

export function fecthPosts() {
    let url = `${ROOT_URL}/posts${API_KEY}`;

    const request = axios.get(url);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(props) {
    let url = `${ROOT_URL}/posts${API_KEY}`;

    const request = axios.post(url, props);

    return {
        type: CREATE_POST,
        payload: request
    };
}