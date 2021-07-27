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

export const TCpaso3 = ({
  ejercicio,
  setPaso3Valido,
  paso3Valido,
  hintsTerminado,
  setHintsTerminado,
}) => {
  //hook para obtener un input
  const respuesta = useRef(null);
  //hook para volver a renderizar cuando el estudiante ingrese una respuesta
  const [estado, setEstado] = useState(null);
  //resultado correcto (hay que validar para todas las entradas posibles)
  const correcta = ejercicio.answers[0].answer;
  let idPasoSiguiente = null;
  //esta función se ejecuta cuando se oprime el boton aceptar
  const comparar = () => {
    //parametro de entrada recibido, replace elimina "espacios" y "*", trabajar todo en minuscula
    const entrada = respuesta.current.value.replace(/[*]| /g, "").toLowerCase();

    if (correcta === entrada) {
      //valida que la entrada es correcta
      setPaso3Valido((paso3Valido = ejercicio.answers[0].nextStep));
      /*setEstado(
                <div className="alert alert-success"> 
                    <p>{ejercicio.validacion}:&nbsp;
                    <MathComponent tex={ejercicio.soluciones[0].entrada}  display={false}/>
                    </p>
                    <p>
                    Entonces el discriminante es:
                    &nbsp;
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
            <label>Δ = &nbsp;</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w="30%"
              focusBorderColor="#9DECF9"
              placeholder="Ingrese discriminante"
              ref={respuesta}
              isReadOnly={paso3Valido != null}
            />
            &nbsp;&nbsp;&nbsp;
            {paso3Valido == null && (
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
          {paso3Valido == null && (
            <Hint
              ejercicio={ejercicio.hints}
              setHintsTerminado={setHintsTerminado}
            ></Hint>
          )}
        </WrapItem>
      </Wrap>
      <br></br>
      {paso3Valido == null && hintsTerminado === null && estado}
    </>
  );
};
