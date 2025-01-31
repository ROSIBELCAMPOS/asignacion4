import { ReactNode, useState } from "react";
import Select from "react-select";

type Props = {
  target: any;
  e: string;
  selecComboBox: ReactNode;
};


const sede = [
  {value:"Ciudad Universitaria" , label: "Ciudad Universitari"},
  {value: "Ciudad Bolivar" , label: "Ciudad Bolivar"},
  {value: "Upata", label: "Upata"},
  {value: "Villa Asia", label: "Villa Asia"},
];

const FormularioDatosAcad = () => {
  const [selecComboBox, setComboBox] = useState({sede});

  const handleComboBoxChange = (e:Props) =>{
    setComboBox(e.target.value);
    console.log(e);

  };
  return (
    <div>
      
        <Select
          defaultValue={selecComboBox}
          onChange ={handleComboBoxChange}
          options = {sede}
    
        />

        
    </div>
  );
}

export default FormularioDatosAcad

