import axios from 'axios';
import md5 from 'md5';

const publicKey = 'fd556d57cf5a2212aba0f76e466d1dcc';
const privateKey = 'e707a21edc5d3565b065df35105ad99bd3179295'

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