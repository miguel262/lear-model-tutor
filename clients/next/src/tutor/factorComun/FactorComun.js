import React, { useState } from "react";
//import {Ejercicio1, Ejercicio2,Ejercicio3,Ejercicio4,Ejercicio5,Ejercicio6,Ejercicio7} from './EjerciciosFC';

import FCpaso1 from "./steps/FCpaso1";
import { MathComponent } from "../../components/MathJax";
//import {Accordion,Card} from 'react-bootstrap';
import { BreadcrumbTutor } from "../tools/BreadcrumbTutor";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Alert,
  Box,
  Wrap,
} from "@chakra-ui/react";
//react functional component

const FC = ({ ejercicio }) => {
  //const ejemplo = Ejercicio2;
  //const ejercicio=Ejercicio1;
  const [paso1Valido, setPaso1Valido] = useState(null);
  const [hintsTerminado, setHintsTerminado] = useState(null);

  return (
    <div>
      <BreadcrumbTutor
        root="Factorización"
        item={ejercicio.itemTitle}
      ></BreadcrumbTutor>

      {ejercicio.text}

      <Wrap justify="center">
        <MathComponent tex={ejercicio.steps[0].expression} display={true} />
      </Wrap>

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <Alert status={paso1Valido == null ? "info" : "success"}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {ejercicio.steps[0].step}
                {paso1Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel pb={4}>
            <FCpaso1
              ejercicio={ejercicio.steps[0]}
              setPaso1Valido={setPaso1Valido}
              paso1Valido={paso1Valido}
              setHintsTerminado={setHintsTerminado}
            ></FCpaso1>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FC;
