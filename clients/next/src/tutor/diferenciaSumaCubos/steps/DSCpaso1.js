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
  Input,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export const DSCpaso1 = ({
  ejercicio,
  setPaso1Valido,
  paso1Valido,
  signo,
  hintsTerminado,
  setHintsTerminado,
}) => {
  const respuesta1 = useRef(null);
  const respuesta2 = useRef(null);
  const [estado, setEstado] = useState(null);
  //let idPasoSiguiente = null;
  const correctas = ejercicio.answers.map((elemento) => elemento.answer);

  const comparar = () => {
    const entrada = [
      respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),
      respuesta2.current.value.replace(/[*]| /g, "").toLowerCase(),
    ];
    const valida = (element) =>
      element[0] === entrada[0] && element[1] === entrada[1];
    if (correctas.some(valida)) {
      setPaso1Valido(
        (paso1Valido = ejercicio.answers[correctas.findIndex(valida)].nextStep)
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
      <Wrap>
        <WrapItem w={250}>
          <Flex align="center">
            <p> &nbsp; &nbsp; </p>
            <MathComponent
              tex={String.raw`${ejercicio.expression}`}
              display={false}
            />
          </Flex>
        </WrapItem>

        <WrapItem w={550}>
          <Flex align="center">
            <label>( </label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="23%"
              focusBorderColor="#9DECF9"
              placeholder="Primera Raiz³"
              ref={respuesta1}
              isReadOnly={paso1Valido != null}
            />
            <label htmlFor="label2">)³</label>
            <label>&nbsp;{signo} ( </label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="23%"
              focusBorderColor="#9DECF9"
              placeholder="Segunda Raiz³"
              ref={respuesta2}
              isReadOnly={paso1Valido != null}
            />
            <label htmlFor="label3">)³</label> &nbsp;&nbsp;&nbsp;
            {paso1Valido == null && (
              <Button
                colorScheme="cyan"
                variant="outline"
                onClick={comparar}
                size="sm"
              >
                Aceptar
              </Button>
            )}
          </Flex>
        </WrapItem>

        <WrapItem>
          {paso1Valido == null && (
            <Hint
              ejercicio={ejercicio.hints}
              setHintsTerminado={setHintsTerminado}
            ></Hint>
          )}
        </WrapItem>
      </Wrap>
      <br></br>
      {paso1Valido == null && estado}
      {/* <Row  style={{color: "hotpink", padding: 0}}>
                
                <Col xl= "5" style={{padding: 0}}> 
                <div className="input-group">
                        <label htmlFor="label1">(</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label1"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese cubo 1"
                            autoComplete= "off"
                            ref= {respuesta1}
                            disabled = {paso1Valido!=null}
                        ></input>
                        <label htmlFor="label2">){<MathComponent tex={String.raw`^3`}  display={false}/>}  {signo} (</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label2"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese cubo 2"
                            autoComplete= "off"
                            ref= {respuesta2}
                            disabled = {paso1Valido!=null}
                        ></input>
                        <label htmlFor="label3">){<MathComponent tex={String.raw`^3`}  display={false}/>} &nbsp;</label>
                        {paso1Valido==null&&<button 
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
                    {paso1Valido==null&&<Hint ejercicio={ejercicio.hints} setHintsTerminado ={setHintsTerminado}></Hint>}
                </Col> 
            </Row>
                        {paso1Valido==null&&estado} */}
    </>
  );
};
