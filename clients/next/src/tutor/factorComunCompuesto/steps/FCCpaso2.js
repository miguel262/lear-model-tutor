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
      <Grid templateColumns="repeat(7, 1fr)" gap={1}>
        <GridItem colSpan={2}>
          <Flex align="center">
            <p> &nbsp; &nbsp; </p>
            <MathComponent
              tex={String.raw`${ejercicio.expression}`}
              display={false}
            />
          </Flex>
        </GridItem>
        <GridItem colSpan={4} style={{ padding: 0 }}>
          <Flex align="center">
            <label>(&nbsp;</label>
            <input
              style={{
                backgroundColor: "#21232A",
                border: "none",
                color: "white",
                textAlign: "center",
                fontStyle: "italic",
              }}
              size="11"
              type="text"
              placeholder="Factor común 1"
              autoComplete="off"
              ref={respuesta1}
              disabled={paso2Valido != null}
            ></input>
            <label>&nbsp;)</label>
            <MathComponent tex={ejercicio.result[0][1]} display={false} />
            <label>&nbsp;+&nbsp;</label>
            <label>(&nbsp;</label>
            <input
              style={{
                backgroundColor: "#21232A",
                border: "none",
                color: "white",
                textAlign: "center",
                fontStyle: "italic",
              }}
              size="11"
              type="text"
              placeholder="Factor común 2"
              autoComplete="off"
              ref={respuesta2}
              disabled={paso2Valido != null}
            ></input>
            <label>&nbsp;)</label>
            <MathComponent
              tex={ejercicio.result[1][1]}
              display={false}
              style={{ textAlign: "center" }}
            />
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
      <br></br>
      {paso2Valido == null && estado}
    </>
  );
};
export default FCCpaso2;
