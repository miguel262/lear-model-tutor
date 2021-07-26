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

export const TCpaso2 = ({
  ejercicio,
  setPaso2Valido,
  paso2Valido,
  hintsTerminado,
  setHintsTerminado,
}) => {
  const respuesta1 = useRef(null);
  const respuesta2 = useRef(null);
  const respuesta3 = useRef(null);
  const [estado, setEstado] = useState(null);
  let idPasoSiguiente = null;
  const correctas = ejercicio.answers.map((elemento) => elemento.answer);

  const comparar = () => {
    const entrada = [
      respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),
      respuesta2.current.value.replace(/[*]| /g, "").toLowerCase(),
      respuesta3.current.value.replace(/[*]| /g, "").toLowerCase(),
    ];
    const valida = (element) =>
      element[0] === entrada[0] &&
      element[1] === entrada[1] &&
      element[2] === entrada[2];
    if (correctas.some(valida)) {
      setPaso2Valido(
        (paso2Valido = ejercicio.answers[correctas.findIndex(valida)].nextStep)
      );
      /*setEstado(
                <div className="alert alert-success"> 
                        <p>{ejercicio.validacion}:&nbsp;
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
            <label>a =</label>
            <input
              size="10"
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
              placeholder="Ingrese a"
              autoComplete="off"
              ref={respuesta1}
              disabled={paso2Valido != null}
            ></input>
            <label> , b =</label>
            <input
              size="10"
              style={{
                backgroundColor: "#21232A",
                border: "none",
                color: "white",
                textAlign: "center",
              }}
              id="label2"
              type="text"
              name="name"
              className="form-control"
              placeholder="Ingrese b"
              autoComplete="off"
              ref={respuesta2}
              disabled={paso2Valido != null}
            ></input>
            <label>, c = &nbsp;</label>
            <input
              size="10"
              style={{
                backgroundColor: "#21232A",
                border: "none",
                color: "white",
                textAlign: "center",
              }}
              id="label2"
              type="text"
              name="name"
              className="form-control"
              placeholder="Ingrese c"
              autoComplete="off"
              ref={respuesta3}
              disabled={paso2Valido != null}
            ></input>
            &nbsp;&nbsp;
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
                            disabled = {paso2Valido!=null}
                        ></input>
                        <label htmlFor="label2"> , b =</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label2"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese b"
                            autoComplete= "off"
                            ref= {respuesta2}
                            disabled = {paso2Valido!=null}
                        ></input>
                        <label htmlFor="label3">, c = &nbsp;</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label2"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese c"
                            autoComplete= "off"
                            ref= {respuesta3}
                            disabled = {paso2Valido!=null}
                        ></input>
                        {paso2Valido==null&&<button 
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
                {paso2Valido==null&&hintsTerminado===null&&<Hint ejercicio={ejercicio.hint_solicitado} setHintsTerminado ={setHintsTerminado}></Hint>}
                </Col> 
                        </Row>*/}
      {paso2Valido == null && hintsTerminado === null && estado}
    </>
  );
};
