import React, { useState, useEffect } from "react";
import { Ejercicio1 } from "./EjerciciosDSC";
import { MathComponent } from "../../components/MathJax";
import { BreadcrumbTutor } from "../tools/BreadcrumbTutor";
import { DSCpaso1 } from "./steps/DSCpaso1";
import { DSCpaso2 } from "./steps/DSCpaso2";
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
const DSC = () => {
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
    <div>
      {/*
           <DSCejemplo ejemplo={ejemplo}></DSCejemplo>
            */}
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
            <DSCpaso1
              ejercicio={ejercicio.steps[0]}
              setPaso1Valido={setPaso1Valido}
              paso1Valido={paso1Valido}
              signo={ejercicio.sign}
              hintsTerminado={hintsTerminado}
              setHintsTerminado={setHintsTerminado}
            ></DSCpaso1>
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
              <DSCpaso2
                ejercicio={ejercicio.steps[paso1Valido]}
                setPaso2Valido={setPaso2Valido}
                paso2Valido={paso2Valido}
                hintsTerminado={hintsTerminado2}
                setHintsTerminado={setHintsTerminado2}
              ></DSCpaso2>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {/*<Accordion defaultActiveKey="0">
                <Card bg={paso1Valido==null?"secondary":"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso1Valido==null?"0":"1"}>
                        {ejercicio.steps[0].step}
                        {paso1Valido!=null&&"    ✔ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso1Valido==null?"0":"1"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <DSCpaso1 ejercicio={ejercicio.steps[0]} setPaso1Valido={setPaso1Valido} paso1Valido={paso1Valido} signo={ejercicio.sign} hintsTerminado={hintsTerminado} setHintsTerminado={setHintsTerminado}></DSCpaso1>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg={paso2Valido==null?"secondary":"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso1Valido!=null?"0":"1"}>
                        {ejercicio.steps[1].step}
                        {paso2Valido!=null&&"    ✔ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso1Valido!=null?"0":"1"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        {paso1Valido!=null&&<DSCpaso2 ejercicio={ejercicio.steps[paso1Valido]} setPaso2Valido={setPaso2Valido} paso2Valido={paso2Valido} hintsTerminado={hintsTerminado2} setHintsTerminado={setHintsTerminado2}></DSCpaso2>}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
        </Accordion>*/}
    </div>
  );
};

export default DSC;
