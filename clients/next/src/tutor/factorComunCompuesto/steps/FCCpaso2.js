import React, { useRef, useState } from "react";
import Hint from "../../tools/Hint";
import { MathComponent } from "../../../components/MathJax";
import {
  Grid,
  GridItem,
  Flex,
  Alert,
  AlertIcon,
  Button,
  Input,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const FCCpaso2 = ({
  ejercicio,
  setPaso2Valido,
  paso2Valido,
  hintsTerminado,
  setHintsTerminado,
}) => {
  const respuesta1 = useRef(null);
  const respuesta2 = useRef(null);
  const correcta = ejercicio.answers.answer;
  const [estado, setEstado] = useState(null);
  //let idPasoSiguiente = null;

  const comparar = () => {
    const entrada = [
      respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),
      respuesta2.current.value.replace(/[*]| /g, "").toLowerCase(),
    ];

    if (entrada[0] === correcta[0] && entrada[1] === correcta[1]) {
      setPaso2Valido((paso2Valido = ejercicio.answers.nextStep));
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
            <label>(&nbsp;</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="20%"
              focusBorderColor="#9DECF9"
              placeholder="Factor común 1"
              ref={respuesta1}
              isReadOnly={paso2Valido != null}
            />
            <label>&nbsp;)</label>
            <MathComponent tex={ejercicio.result[0][1]} display={false} />
            <label>&nbsp;+&nbsp;</label>
            <label>(&nbsp;</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="20%"
              focusBorderColor="#9DECF9"
              placeholder="Factor común 2"
              ref={respuesta2}
              isReadOnly={paso2Valido != null}
            />
            <label>&nbsp;)</label>
            <MathComponent
              tex={ejercicio.result[1][1]}
              display={false}
              style={{ textAlign: "center" }}
            />
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
      {paso2Valido == null && estado}
    </>
  );
};
export default FCCpaso2;
