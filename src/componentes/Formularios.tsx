import { useForm } from "react-hook-form";
import { formulario } from "../conexionApi/conexion";


function Formularios() {
    const { register, handleSubmit, 
        formState:{ errors } } = useForm();

        console.log(errors);

    const envioDatos = handleSubmit ( async ( data )  =>  {
        console . log ( data );
        const res = await formulario ( data );
        console.log (res);
    } ); 

  return (
    <div className="bodyForm">
         <form  onSubmit = { envioDatos } >

            <input className="formDatosInput"
                placeholder="Nombre"
                type="string"
                {...register("Nombre", {required: true})} />

                {
                    errors.Nombre && <span> Dato Requerido </span>
                }

            <input className="formDatosInput"
                placeholder="Apellido"
                type="string"
                {...register("Apellido", {required: true})} />

                {
                    errors.Apellido && <span> Dato Requerido </span>
                }

            <input className="formDatosInput"
                 placeholder="Cedula"
                 type="integer"
                 {...register("NumCedula", {required: true})}/>

                {
                    errors.NumCedula && <span> Dato Requerido </span>
                }

            <input className="formDatosInput"
                 placeholder="Telefono"
                 type="integer"
                 {...register("Telefono")}/>

            <input className="formDatosInput" 
                 placeholder="Sede"
                 type="string"
                 {...register("Sede")} />

            <input className="formDatosInput"
                 placeholder="Carrera"
                 type="string"
                 {...register("Carrera", {required: true})} />
                  {
                    errors.Carrera && <span> Dato Requerido </span>
                }

            <input className="formDatosInput"
                 placeholder="Indice Academico"
                 type="real"
                 {...register("IndiceAcad")} />

            <button type="submit">
                Enviar
            </button>     

        </form>

    </div>
   
  )
}

export default Formularios
