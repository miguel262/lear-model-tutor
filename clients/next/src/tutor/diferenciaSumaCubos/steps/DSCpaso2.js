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
  WrapItem,
  Wrap,
} from "@chakra-ui/react";

export const DSCpaso2 = ({
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
        // <MathComponent tex={ejercicio.result} display={false} />
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
              placeholder="Ingrese factor 1"
              ref={respuesta1}
              isReadOnly={paso2Valido != null}
            />
            <label htmlFor="label2">)(</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="23%"
              focusBorderColor="#9DECF9"
              placeholder="Ingrese factor 2"
              ref={respuesta2}
              isReadOnly={paso2Valido != null}
            />
            <label htmlFor="label3">)</label>
            &nbsp;&nbsp;&nbsp;
            {paso2Valido == null && (
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
          {paso2Valido == null && (
            <Hint
              ejercicio={ejercicio.hints}
              setHintsTerminado={setHintsTerminado}
            ></Hint>
          )}
        </WrapItem>
      </Wrap>
      <br></br>
      {estado}
    </>
  );
};
