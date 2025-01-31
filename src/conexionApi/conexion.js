import axios from 'axios';

const API = 'http://localhost:3000/principal';

//export const mostrar = () =>  axios.get(`${API}/mostrar`);
export const formulario = user => axios.post(`${API}/formulario`, user);

//export default {mostrar} 