import React, { useRef, useState } from "react";
import { MathComponent } from "../../../components/MathJax";
import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Hint from "../../tools/Hint";

const FCCpaso1 = ({
  ejercicio,
  setPaso1Valido,
  paso1Valido,
  hintsTerminado,
  setHintsTerminado,
}) => {
  const respuesta = useRef(null);
  const [estado, setEstado] = useState(null);
  //let idPasoSiguiente = null;
  const correctas = ejercicio.answers.map((elemento) => elemento.answer);

  const comparar = () => {
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
          {ejercicio.validation}
        </Alert>
      );
      setPaso1Valido((paso1Valido = "Terminado"));
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
          &nbsp; &nbsp;
          <MathComponent
            tex={String.raw`${ejercicio.expression}`}
            display={false}
          />
        </WrapItem>

        <WrapItem w={550}>
          <Flex align="center">
            <label>(&nbsp;</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="30%"
              focusBorderColor="#9DECF9"
              placeholder="Ingrese factor común"
              ref={respuesta}
              isReadOnly={paso1Valido != null}
            />
            <label>&nbsp;)</label>
            {paso1Valido === null && (
              <>
                <label>&nbsp;(?)&nbsp;&nbsp;&nbsp;</label>
                <Button
                  colorScheme="cyan"
                  size="sm"
                  variant="outline"
                  onClick={comparar}
                >
                  Aceptar
                </Button>
              </>
            )}
            {paso1Valido !== null && (
              <>
                <MathComponent
                  tex={String.raw`${ejercicio.result}`}
                  display={false}
                />
              </>
            )}
          </Flex>
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
      {/*<Grid templateColumns="repeat(7, 1fr)" gap={1}>
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
            <label>(&nbsp;</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="30%"
              focusBorderColor="#9DECF9"
              placeholder="Ingrese factor común"
              ref={respuesta}
              isReadOnly={paso1Valido != null}
              //FormLabel={paso1Valido != null && "data-disabled"}
            />
            <label>&nbsp;)</label>
            {paso1Valido === null && (
              <>
                <label>&nbsp;(?)&nbsp;</label>
                <Button colorScheme="cyan" variant="outline" onClick={comparar}>
                  Aceptar
                </Button>
              </>
            )}
            {paso1Valido !== null && (
              <>
                <MathComponent
                  tex={String.raw`${ejercicio.result}`}
                  display={false}
                />
              </>
            )}
          </Flex>
        </GridItem>

        <GridItem colSpan={1}>
          {paso1Valido === null && (
            <Hint
              ejercicio={ejercicio.hints}
              setHintsTerminado={setHintsTerminado}
            ></Hint>
          )}
        </GridItem>
          </Grid>*/}

      {estado}
    </>
  );
};
export default FCCpaso1;
