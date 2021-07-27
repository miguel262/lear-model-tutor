import React, { useRef, useState } from "react";
import { MathComponent } from "../../../components/MathJax";
import Hint from "../../tools/Hint";
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

const FCCpaso1 = ({
  ejercicio,
  setPaso1Valido,
  paso1Valido,
  hintsTerminado,
  setHintsTerminado,
}) => {
  const respuesta1 = useRef(null);
  const respuesta2 = useRef(null);
  const [estado, setEstado] = useState(null);
  //let idPasoSiguiente = null;
  const correctas = ejercicio.answers.map((elemento) => elemento.answer);

  const comparar = () => {
    //parametro de entrada recibido, replace elimina "espacios" y "*", trabajar todo en minuscula
    const entrada = [
      respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),
      respuesta2.current.value.replace(/[*]| /g, "").toLowerCase(),
    ];
    //valida que la entrada es correctas
    const valida = (element) =>
      (element[0] === entrada[0] && element[1] === entrada[1]) ||
      (element[0] === entrada[1] && element[1] === entrada[0]);
    //El método some() comprueba si al menos un elemento del array
    //cumple con la condición implementada por la función proporcionada.
    if (correctas.some(valida)) {
      setPaso1Valido(
        (paso1Valido = ejercicio.answers[correctas.findIndex(valida)].nextStep)
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
            placeholder="Ingrese grupo 1"
            ref={respuesta1}
            isReadOnly={paso1Valido != null}
          />
          <label> )&nbsp;+&nbsp;( </label>
          <Input
            style={{
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: "600",
            }}
            size="sm"
            w="23%"
            focusBorderColor="#9DECF9"
            placeholder="Ingrese grupo 2"
            ref={respuesta2}
            isReadOnly={paso1Valido != null}
          />
          <label> )&nbsp;&nbsp;&nbsp; </label>
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
        </WrapItem>

        <WrapItem>
          {paso1Valido === null && (
            <Hint
              ejercicio={ejercicio.hints}
              setHintsTerminado={setHintsTerminado}
            ></Hint>
          )}
        </WrapItem>
      </Wrap>
      <br></br>

      {paso1Valido == null && estado}
    </>
  );
};
export default FCCpaso1;
