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

export const TCpaso6 = ({
  ejercicio,
  setPaso6Valido,
  paso6Valido,
  hintsTerminado,
  setHintsTerminado,
  a,
}) => {
  const respuesta1 = useRef(null);
  const respuesta2 = useRef(null);
  const [estado, setEstado] = useState(null);
  const correctas = ejercicio.answers[0].answer;
  const comparar = () => {
    const entrada = [
      respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),
      respuesta2.current.value.replace(/[*]| /g, "").toLowerCase(),
    ];
    const valida = (element) =>
      (element[0] === entrada[0] && element[1] === entrada[1]) ||
      (element[0] === entrada[1] && element[1] === entrada[0]);
    if (correctas.some(valida)) {
      setEstado(
        <Alert status="success">
          <AlertIcon />
          {ejercicio.validation}
          &nbsp;
          <MathComponent tex={ejercicio.result} display={false} />
        </Alert>
      );
      setPaso6Valido((paso6Valido = "Terminado"));
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
            <label>{a !== 1 ? a : ""}(</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="25%"
              focusBorderColor="#9DECF9"
              placeholder="Primer factor"
              ref={respuesta1}
              isReadOnly={paso6Valido != null}
            />
            <label>)(</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="25%"
              focusBorderColor="#9DECF9"
              placeholder="Segundo factor"
              ref={respuesta2}
              isReadOnly={paso6Valido != null}
            />
            <label>) &nbsp; &nbsp; &nbsp;</label>
            {paso6Valido == null && (
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
          {paso6Valido == null && (
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
