import React, { useState, useEffect } from "react";
import { Ejercicio1 } from "./EjerciciosDC";
import { MathComponent } from "../../components/MathJax";
//import { Accordion,Card } from 'react-bootstrap';
import { BreadcrumbTutor } from "../tools/BreadcrumbTutor";
import { DCpaso1 } from "./steps/DCpaso1";
import { DCpaso2 } from "./steps/DCpaso2";

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

//react functional component
const DC = () => {
  //const ejemplo = Ejercicio1;
  const ejercicio = Ejercicio1;
  const [paso1Valido, setPaso1Valido] = useState(null);
  const [paso2Valido, setPaso2Valido] = useState(null);
  const [hintsTerminado, setHintsTerminado] = useState(null);
  const [hintsTerminado2, setHintsTerminado2] = useState(null);

  const [index, setIndex] = useState([1, 0]);

  useEffect(() => {
    if (paso1Valido != null) {
      setIndex([1]);
    }
  }, [paso1Valido]);

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
            <DCpaso1
              ejercicio={ejercicio.steps[0]}
              setPaso1Valido={setPaso1Valido}
              paso1Valido={paso1Valido}
              hintsTerminado={hintsTerminado}
              setHintsTerminado={setHintsTerminado}
            ></DCpaso1>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
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
              <DCpaso2
                ejercicio={ejercicio.steps[paso1Valido]}
                setPaso2Valido={setPaso2Valido}
                paso2Valido={paso2Valido}
                hintsTerminado={hintsTerminado2}
                setHintsTerminado={setHintsTerminado2}
              ></DCpaso2>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default DC;
