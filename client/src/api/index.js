import axios from 'axios';

const API = axios.create({ baseURL: 'https://zola-app-orange.onrender.com' });
const bitlyAPI = "https://api-ssl.bitly.com/v4/shorten";

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});



const shortenURL = async (url) => {
  try {
    const response = await axios.post(bitlyAPI, {
      long_url: url,
      access_token: "c9b78bc81483084209cf1dc683d0ac4c97516b56",
    });

    return response.data.link;
  } catch (error) {
    console.error(error);
  }
};

export default shortenURL;

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

