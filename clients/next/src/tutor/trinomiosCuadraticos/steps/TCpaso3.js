import React, { useRef, useState } from "react";
import Hint from "../../tools/Hint";
import { MathComponent } from "../../../components/MathJax";
import {
  Alert,
  AlertIcon,
  Button,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";

export const TCpaso3 = ({
  ejercicio,
  setPaso3Valido,
  paso3Valido,
  hintsTerminado,
  setHintsTerminado,
}) => {
  //hook para obtener un input
  const respuesta = useRef(null);
  //hook para volver a renderizar cuando el estudiante ingrese una respuesta
  const [estado, setEstado] = useState(null);
  //resultado correcto (hay que validar para todas las entradas posibles)
  const correcta = ejercicio.answers[0].answer;
  let idPasoSiguiente = null;
  //esta función se ejecuta cuando se oprime el boton aceptar
  const comparar = () => {
    //parametro de entrada recibido, replace elimina "espacios" y "*", trabajar todo en minuscula
    const entrada = respuesta.current.value.replace(/[*]| /g, "").toLowerCase();

    if (correcta === entrada) {
      //valida que la entrada es correcta
      setPaso3Valido((paso3Valido = ejercicio.answers[0].nextStep));
      /*setEstado(
                <div className="alert alert-success"> 
                    <p>{ejercicio.validacion}:&nbsp;
                    <MathComponent tex={ejercicio.soluciones[0].entrada}  display={false}/>
                    </p>
                    <p>
                    Entonces el discriminante es:
                    &nbsp;
                    <MathComponent tex={ejercicio.result_final}  display={false}/>
                    </p>
                </div>
            );*/
    } else {
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
      <br></br>
      <Grid templateColumns="repeat(7, 1fr)" gap={1}>
        <GridItem colSpan={2}>
          <Flex align="center">
            &nbsp; &nbsp;
            <MathComponent
              tex={String.raw`${ejercicio.expression}`}
              display={false}
            />
          </Flex>
        </GridItem>

        <GridItem colSpan={4}>
          <Flex align="center">
            <label>Δ = &nbsp;</label>
            <input
              size="13"
              style={{
                backgroundColor: "#21232A",
                border: "none",
                color: "white",
                textAlign: "center",
              }}
              id="label1"
              type="text"
              name="name"
              className="form-control"
              placeholder="Ingrese discriminante"
              autoComplete="off"
              ref={respuesta}
              disabled={paso3Valido != null}
            ></input>
            &nbsp;&nbsp;
            {paso3Valido == null && (
              <Button colorScheme="cyan" variant="outline" onClick={comparar}>
                Aceptar
              </Button>
            )}
          </Flex>
        </GridItem>

        <GridItem colSpan={1}>
          {paso3Valido == null && (
            <Hint
              ejercicio={ejercicio.hints}
              setHintsTerminado={setHintsTerminado}
            ></Hint>
          )}
        </GridItem>
      </Grid>
      {paso3Valido == null && hintsTerminado === null && estado}

      {/* 
            <Row  style={{ padding: 0}}>
                <Col md="12" xl="3" style={{padding: 26.5}}>    
                    <MathComponent tex={String.raw`${ejercicio.expresion}`}  display={false}/>
                </Col>
                <Col md="5" xl="4" style={{padding: 0}}> 
                {hintsTerminado===null&&<div className="input-group">
                        <label htmlFor="label3">Δ = &nbsp;</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese discriminante"
                            autoComplete= "off"
                            ref= {respuesta}
                            disabled = {paso3Valido!=null}
                        ></input>
                        {paso3Valido==null&&<button 
                            type="submit" 
                            className="btn btn-outline-success"
                            onClick={comparar}
                        >
                            Aceptar
                        </button>}
                      </div>}
                      {hintsTerminado!==null&& <div> <p>{ejercicio.hint_solicitado[hintsTerminado]}</p> </div>}        
                </Col>
                <Col md = "7" xl="5" style={{padding: 0}}> 
                {paso3Valido==null&&hintsTerminado===null&&<Hint ejercicio={ejercicio.hint_solicitado} setHintsTerminado ={setHintsTerminado}></Hint>}
                </Col> 
                {paso3Valido==null&&hintsTerminado===null&&estado}
                        </Row>  */}
    </>
  );
};
