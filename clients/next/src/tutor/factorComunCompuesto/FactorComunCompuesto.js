import React, { useState, useEffect } from "react";
import { Ejercicio1 } from "./EjerciciosFCC";
import { MathComponent } from "../../components/MathJax";
import FCCpaso1 from "./steps/FCCpaso1";
import FCCpaso2 from "./steps/FCCpaso2";
import FCpaso1 from "../factorComun/steps/FCpaso1";
import { BreadcrumbTutor } from "../tools/BreadcrumbTutor";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Alert,
  Wrap,
} from "@chakra-ui/react";

const FCC = () => {
  const ejercicio = Ejercicio1;
  const [paso1Valido, setPaso1Valido] = useState(null);
  const [paso2Valido, setPaso2Valido] = useState(null);
  const [paso3Valido, setPaso3Valido] = useState(null);
  const [hintsTerminado, setHintsTerminado] = useState(null);
  const [hintsTerminado2, setHintsTerminado2] = useState(null);
  const [hintsTerminado3, setHintsTerminado3] = useState(null);
  const [index, setIndex] = useState([1, 2, 0]);

  useEffect(() => {
    if (paso1Valido != null) {
      setIndex([1]);
    }
  }, [paso1Valido]);

  useEffect(() => {
    if (paso2Valido != null) {
      setIndex([2]);
    }
  }, [paso2Valido]);

  return (
    <>
      <BreadcrumbTutor
        root="Factorización"
        item={ejercicio.itemTitle}
      ></BreadcrumbTutor>

      {ejercicio.text}
      <Wrap justify="center">
        <MathComponent tex={ejercicio.steps[0].expression} display={true} />
      </Wrap>

      <Accordion allowToggle allowMultiple index={index} style={{ padding: 0 }}>
        <AccordionItem isFocusable={false}>
          <Alert status={paso1Valido == null ? "info" : "success"}>
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 0)) {
                  setIndex(index.filter((e) => e !== 0));
                } else {
                  setIndex(index.concat(0));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {ejercicio.steps[0].step}
                {paso1Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            <FCCpaso1
              ejercicio={ejercicio.steps[0]}
              setPaso1Valido={setPaso1Valido}
              paso1Valido={paso1Valido}
              hintsTerminado={hintsTerminado}
              setHintsTerminado={setHintsTerminado}
            ></FCCpaso1>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem isFocusable={true}>
          <Alert status={paso2Valido == null ? "info" : "success"}>
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 1)) {
                  setIndex(index.filter((e) => e !== 1));
                } else {
                  setIndex(index.concat(1));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {ejercicio.steps[1].step}
                {paso2Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso1Valido != null && (
              <FCCpaso2
                ejercicio={ejercicio.steps[paso1Valido]}
                setPaso2Valido={setPaso2Valido}
                paso2Valido={paso2Valido}
                hintsTerminado={hintsTerminado2}
                setHintsTerminado={setHintsTerminado2}
              ></FCCpaso2>
            )}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Alert status={paso3Valido == null ? "info" : "success"}>
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 2)) {
                  setIndex(index.filter((e) => e !== 2));
                } else {
                  setIndex(index.concat(2));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {ejercicio.steps[ejercicio.steps[1].answers.nextStep].step}
                {paso3Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso2Valido != null && (
              <FCpaso1
                ejercicio={ejercicio.steps[paso2Valido]}
                setPaso1Valido={setPaso3Valido}
                paso1Valido={paso3Valido}
                hintsTerminado={hintsTerminado3}
                setHintsTerminado={setHintsTerminado3}
              ></FCpaso1>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FCC;
