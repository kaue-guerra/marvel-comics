import axios from 'axios';
import md5 from 'md5';

const publicKey = 'dfcea5624021194f64456856867a20cb';
const privateKey = 'c3f270dda8dd619391eea0e2b50318905790d284'

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: time,
        apikey: publicKey,
        hash,
    },
})

export default api;