
function Desplegable() {
  return (
    <div>
        <label> Sede: </label>
        <select>
            <option value="Ciudad Universitaria">Ciudad Universitaria</option>
            <option value="Ciudad Bolivar">Ciudad Bolivar</option>
            <option value="Villas Asia">Villa Asia</option>
            <option value="Upata">Upata</option>
            <option value="Recria">Recria</option>
        </select>

        <label> Carrera: </label>
        <select>
            <option value="Ing. Industrial">Ing. Industrial</option>
            <option value="Educacion">Educacion</option>
            <option value="Contaduria">Contaduria</option>
            <option value="Ing.Informatica">Ing.Informatica</option>
            <option value="Administracion">Administracion</option>
        </select>
      
    </div>
  )
}

export default Desplegable
