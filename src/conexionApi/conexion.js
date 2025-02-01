import axios from 'axios';

// Crear la instancia de axios
const api = axios.create({
    baseURL: 'http://localhost:3000/principal', // Dirección de tu API
    timeout: 1000, // Tiempo máximo de espera (opcional)
    headers: {
        'Content-Type': 'application/json', // Tipo de contenido
    }
});

// Función para enviar los datos de registro de usuario
export const formulario = async (data) => {
    try {
        // Realizar la solicitud POST para crear un usuario
        const response = await api.post('/', data); // Enviamos los datos al endpoint principal
        return response.data; // Devolver la respuesta de la API
    } catch (error) {
        console.error("Error en la solicitud:", error); // Manejar cualquier error
        throw error; // Lanzar el error para que pueda ser gestionado en el frontend
    }
};

// Función para obtener los usuarios (GET)
export const obtenerUsuarios = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        throw error;
    }
};

// Función para actualizar un usuario (PUT)
export const actualizarUsuario = async (data) => {
    try {
        const response = await api.put('/', data); // Aquí puedes enviar los datos para actualizar
        return response.data;
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        throw error;
    }
};

// Función para eliminar un usuario (DELETE)
export const eliminarUsuario = async (numerocedula) => {
    try {
        const response = await api.delete(`/${numerocedula}`); // Se pasa el numerocedula en la URL
        return response.data;
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        throw error;
    }
};
