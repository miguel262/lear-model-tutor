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
            <label>a =</label>
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
              isReadOnly={paso2Valido != null}
              //FormLabel={paso1Valido != null && "data-disabled"}
            />
            <label> , b =</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="20%"
              focusBorderColor="#9DECF9"
              placeholder="Ingrese b"
              ref={respuesta2}
              isReadOnly={paso2Valido != null}
              //FormLabel={paso1Valido != null && "data-disabled"}
            />
            <label>, c = &nbsp;</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="20%"
              focusBorderColor="#9DECF9"
              placeholder="Ingrese c"
              ref={respuesta3}
              isReadOnly={paso2Valido != null}
              //FormLabel={paso1Valido != null && "data-disabled"}
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
      {paso2Valido == null && hintsTerminado === null && estado}
    </>
  );
};
