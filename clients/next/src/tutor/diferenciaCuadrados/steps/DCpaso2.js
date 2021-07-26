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

export const DCpaso2 = ({
  ejercicio,
  setPaso2Valido,
  paso2Valido,
  hintsTerminado,
  setHintsTerminado,
}) => {
  const respuesta1 = useRef(null);
  const respuesta2 = useRef(null);
  const correcta = ejercicio.answers[0].answer;
  const [estado, setEstado] = useState(null);
  const comparar = () => {
    const entrada = [
      respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),
      respuesta2.current.value.replace(/[*]| /g, "").toLowerCase(),
    ];

    if (entrada[0] === correcta[0] && entrada[1] === correcta[1]) {
      setPaso2Valido((paso2Valido = "Terminado"));
      setEstado(
        <Alert status="success">
          <AlertIcon />
          {ejercicio.validation}
        </Alert>
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
            &nbsp; &nbsp;
            <MathComponent
              tex={String.raw`${ejercicio.expression}`}
              display={false}
            />
          </Flex>
        </GridItem>

        <GridItem colSpan={4}>
          <Flex align="center">
            <label>( </label>
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
              disabled={paso2Valido != null}
            ></input>
            <label htmlFor="label2">)(</label>
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
              placeholder="Ingrese grupo 2"
              autoComplete="off"
              ref={respuesta2}
              disabled={paso2Valido != null}
            ></input>
            <label htmlFor="label3">)</label>
            &nbsp;
            {paso2Valido == null && (
              <Button colorScheme="cyan" variant="outline" onClick={comparar}>
                Aceptar
              </Button>
            )}
          </Flex>
        </GridItem>

        <GridItem colSpan={1}>
          {paso2Valido == null && (
            <Hint
              ejercicio={ejercicio.hints}
              setHintsTerminado={setHintsTerminado}
            ></Hint>
          )}
        </GridItem>
      </Grid>
      {/*<Row  style={{color: "hotpink", padding: 0}}>
                <Col xl= "3" style={{padding: 26.5}}>    
                    <MathComponent tex={String.raw`${ejercicio.expression}`}  display={false}/>
                </Col>
                <Col xl= "5" style={{padding: 0}}> 
                <div className="input-group">
                        <label htmlFor="label1">(</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label1"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese suma"
                            autoComplete= "off"
                            ref= {respuesta1}
                            disabled = {paso2Valido!=null}
                        ></input>
                        <label htmlFor="label2">)(</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label2"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese diferencia"
                            autoComplete= "off"
                            ref= {respuesta2}
                            disabled = {paso2Valido!=null}
                        ></input>
                        <label htmlFor="label3">) &nbsp;</label>
                        {paso2Valido==null&&<button 
                            id="label3"
                            type="submit" 
                            className="btn btn-outline-success"
                            onClick={comparar}
                        >
                            Aceptar
                        </button>}
                    </div>  
                </Col>
                <Col xl="4" style={{padding: 0}}> 
                {paso2Valido==null&&<Hint ejercicio={ejercicio.hints} setHintsTerminado ={setHintsTerminado}></Hint>}
                </Col> 
                        </Row>*/}
      <br></br>
      {estado}
    </>
  );
};
