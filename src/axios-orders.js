import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-230cd-default-rtdb.firebaseio.com/'
});

export default instance;