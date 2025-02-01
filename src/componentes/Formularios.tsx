import { useForm } from "react-hook-form";
import { formulario } from "../conexionApi/conexion";
import "../css/style.css";

function Formularios() {
    const { register, handleSubmit, formState:{ errors } } = useForm();

    const envioDatos = handleSubmit(async (data) => {
        console.log("Datos enviados desde el formulario:", data); // Verificar los datos en el componente
    
        try {
            const res = await formulario(data); // Llama a la función formulario
            console.log("Respuesta de la API:", res); // Muestra la respuesta de la API
        } catch (error) {
            console.error('Error:', error.message || error);
        }
    });

  return (
    <div className="container">
         <form onSubmit={envioDatos} className="formulario">
            <h2>Registro de Estudiante</h2>
            <input className="formDatosInput" placeholder="Nombre" type="text" {...register("Nombre", {required: true})} />
            {errors.Nombre && <span className="error">Dato Requerido</span>}

            <input className="formDatosInput" placeholder="Apellido" type="text" {...register("Apellido", {required: true})} />
            {errors.Apellido && <span className="error">Dato Requerido</span>}

            <input className="formDatosInput" placeholder="Cédula" type="text" {...register("NumCedula", {required: true})} />
            {errors.NumCedula && <span className="error">Dato Requerido</span>}

            <input className="formDatosInput" placeholder="Teléfono" type="text" {...register("Telefono")} />

            <input className="formDatosInput" placeholder="Sede" type="text" {...register("Sede")} />

            <input className="formDatosInput" placeholder="Carrera" type="text" {...register("Carrera", {required: true})} />
            {errors.Carrera && <span className="error">Dato Requerido</span>}

            <input className="formDatosInput" placeholder="Índice Académico" type="number" step="0.01" {...register("IndiceAcad")} />

            <button type="submit" className="btn">Enviar</button>
        </form>
    </div>
  )
}

export default Formularios;
