import React, { useRef, useState } from 'react';
//import {MathComponent} from 'mathjax-react';
import {SimpleGrid,Box, Alert, AlertIcon, Button, AlertTitle, AlertDescription} from "@chakra-ui/react"

import Hint from '../../tools/Hint';

const FCCpaso1 = ({ejercicio, setPaso1Valido, paso1Valido, hintsTerminado, setHintsTerminado}) => {
    const respuesta = useRef(null);
    const [estado,setEstado] = useState(null);
    //let idPasoSiguiente = null;
    const correctas = ejercicio.answers.map((elemento)=>elemento.answer);



    const comparar=()=>{
        //parametro de entrada recibido, replace elimina "espacios" y "*", trabajar todo en minuscula
        const entrada = respuesta.current.value.replace(/[*]| /g, "").toLowerCase();
    
        
        //valida que la entrada es correctas
        const valida = (element) => element === entrada;
                //El método some() comprueba si al menos un elemento del array 
        //cumple con la condición implementada por la función proporcionada.
        if (correctas.some(valida)) {
            setEstado(
                <Alert status="success"> 
                    <AlertIcon />
                    <AlertTitle bg="#364240">{ejercicio.validation}</AlertTitle>
                    <AlertDescription bg="#364240">
                    {//<MathComponent tex={ejercicio.result_final}  display={false}/>
        }
                    </AlertDescription> 
                </Alert>
            );
            setPaso1Valido(
                paso1Valido="Terminado"
            );
        }
        else{
                setEstado(
                    //error cuando la entrada es incorrecta
                    <Alert status="error">
                        <AlertIcon />
                        {ejercicio.error} 
                    </Alert>
                );
        }

    };

    return (
        <>
            <SimpleGrid minChildWidth="240px" spacing="10px">
                <Box style={{ padding: 0}}>
                    <div >{//<MathComponent tex={String.raw`${ejercicio.expression}`}  display={false}/>
}</div>
                </Box>
                <Box style={{ padding: 0}}>
                    <div className="input-group">
                    <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                                type="text" 
                                name="name"
                                className="form-control"
                                placeholder="Ingrese factor común"
                                autoComplete= "off"
                                ref= {respuesta}
                                disabled = {paso1Valido!=null}
                            ></input>
                            {(paso1Valido===null)&&<Button 
                                colorScheme="cyan" variant="outline"
                                onClick={comparar}
                            >
                                Aceptar
                            </Button>}
                        </div>
                </Box>
                <Box style={{ padding: 0}}>
                    {paso1Valido===null&&<Hint ejercicio={ejercicio.hints} setHintsTerminado ={setHintsTerminado} ></Hint>}
                </Box>
                
            </SimpleGrid>
            {estado}
        </>
    )

}
export default FCCpaso1;