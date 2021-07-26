import React, { useState, useRef } from "react";
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

export const TCpaso1 = ({
  ejercicio,
  setPaso1Valido,
  paso1Valido,
  hintsTerminado,
  setHintsTerminado,
}) => {
  const respuesta1 = useRef(null);
  const [estado, setEstado] = useState(null);
  //let idPasoSiguiente = null;
  const correcta = ejercicio.answers.map((elemento) => elemento.answer);

  const comparar = () => {
    const entrada = [
      respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),
    ];
    const valida = (element) => element[0] === entrada[0];
    if (correcta.some(valida)) {
      setPaso1Valido(
        (paso1Valido = ejercicio.answers[correcta.findIndex(valida)].nextStep)
      );
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
            <p> &nbsp; &nbsp; </p>
            <MathComponent
              tex={String.raw`${ejercicio.expression}`}
              display={false}
            />
          </Flex>
        </GridItem>

        <GridItem colSpan={4}>
          <Flex align="center">
            <label>a = </label>
            <input
              size="12"
              style={{
                backgroundColor: "#21232A",
                border: "none",
                color: "white",
                textAlign: "center",
                fontStyle: "italic",
              }}
              type="text"
              placeholder="Ingrese grupo 1"
              autoComplete="off"
              ref={respuesta1}
              disabled={paso1Valido != null}
            ></input>

            {paso1Valido == null && (
              <Button colorScheme="cyan" variant="outline" onClick={comparar}>
                Aceptar
              </Button>
            )}
          </Flex>
        </GridItem>

        <GridItem colSpan={1}>
          {paso1Valido == null && (
            <Hint
              ejercicio={ejercicio.hints}
              setHintsTerminado={setHintsTerminado}
            ></Hint>
          )}
        </GridItem>
      </Grid>
      {paso1Valido == null && estado}
      {/*
            <Row  style={{color: "hotpink", padding: 0}}>
                <Col xl= "3" style={{padding: 26.5}}>    
                    <MathComponent tex={String.raw`${ejercicio.expresion}`}  display={false}/>
                </Col>
                <Col xl= "5" style={{padding: 0}}> 
                {hintsTerminado===null&&<div className="input-group">
                        <label htmlFor="label1">a =</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label1"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese a"
                            autoComplete= "off"
                            ref= {respuesta1}
                            disabled = {paso1Valido!=null}
                        ></input>
                        {paso1Valido==null&&<button 
                            id="label3"
                            type="submit" 
                            className="btn btn-outline-success"
                            onClick={comparar}
                        >
                            Aceptar
                        </button>}
                    </div>}
                    {hintsTerminado!==null&& <div> <p>{ejercicio.hint_solicitado[hintsTerminado]}</p> </div>}       
                </Col>
                <Col xl="4" style={{padding: 0}}> 
                {paso1Valido==null&&hintsTerminado===null&&<Hint ejercicio={ejercicio.hint_solicitado} setHintsTerminado ={setHintsTerminado}></Hint>}
                </Col> 
            </Row>
                        {paso1Valido==null&&hintsTerminado===null&&estado} */}
    </>
  );
};
