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

export const TCpaso5 = ({
  ejercicio,
  setPaso5Valido,
  paso5Valido,
  hintsTerminado,
  setHintsTerminado,
}) => {
  const respuesta1 = useRef(null);
  const respuesta2 = useRef(null);
  const [estado, setEstado] = useState(null);
  let idPasoSiguiente = null;
  const correctas = ejercicio.answers.map((elemento) => elemento.answer);
  const comparar = () => {
    const entrada = [
      respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),
      respuesta2.current.value.replace(/[*]| /g, "").toLowerCase(),
    ];
    const valida = (element) =>
      (element[0] === entrada[0] && element[1] === entrada[1]) ||
      (element[0] === entrada[1] && element[1] === entrada[0]);
    if (correctas.some(valida)) {
      setPaso5Valido(
        (paso5Valido = ejercicio.answers[correctas.findIndex(valida)].nextStep)
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
        <WrapItem w={300}>
          <Flex align="center">
            &nbsp; &nbsp;
            <MathComponent
              tex={String.raw`${ejercicio.expression}`}
              display={false}
            />
          </Flex>
        </WrapItem>

        <WrapItem w={500}>
          <Flex align="center">
            <label>x₁ =&nbsp;</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="25%"
              focusBorderColor="#9DECF9"
              placeholder="Ingrese x₁"
              ref={respuesta1}
              isReadOnly={paso5Valido != null}
            />
            &nbsp;&nbsp;
            <label>, x₂ =&nbsp;</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="25%"
              focusBorderColor="#9DECF9"
              placeholder="Ingrese x₂"
              ref={respuesta2}
              isReadOnly={paso5Valido != null}
            />
            &nbsp;&nbsp;&nbsp;
            {paso5Valido == null && (
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
          {paso5Valido == null && (
            <Hint
              ejercicio={ejercicio.hints}
              setHintsTerminado={setHintsTerminado}
            ></Hint>
          )}
        </WrapItem>
      </Wrap>

      <br></br>
      {paso5Valido == null && hintsTerminado === null && estado}
    </>
  );
};
