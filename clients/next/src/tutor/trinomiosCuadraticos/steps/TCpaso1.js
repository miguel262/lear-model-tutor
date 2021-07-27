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
  Input,
  Wrap,
  WrapItem,
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
      <Wrap>
        <WrapItem w={250}>
          <Flex align="center">
            &nbsp; &nbsp;
            <MathComponent
              tex={String.raw`${ejercicio.expression}`}
              display={false}
            />
          </Flex>
        </WrapItem>

        <WrapItem w={550}>
          <Flex align="center">
            <label>a =&nbsp; </label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="20%"
              focusBorderColor="#9DECF9"
              placeholder="Ingrese a"
              ref={respuesta1}
              isReadOnly={paso1Valido != null}
              //FormLabel={paso1Valido != null && "data-disabled"}
            />
            &nbsp;&nbsp;&nbsp;
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
    </>
  );
};
