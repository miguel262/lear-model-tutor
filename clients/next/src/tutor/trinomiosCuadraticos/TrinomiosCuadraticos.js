import React, { useState, useEffect } from "react";
import { Ejercicio2 } from "./EjerciciosTC";
import { MathComponent } from "../../components/MathJax";
import { BreadcrumbTutor } from "../tools/BreadcrumbTutor";
import { TCpaso1 } from "./steps/TCpaso1";
import { TCpaso2 } from "./steps/TCpaso2";
import { TCpaso3 } from "./steps/TCpaso3";
import { TCpaso4 } from "./steps/TCpaso4";
import { TCpaso5 } from "./steps/TCpaso5";
import { TCpaso6 } from "./steps/TCpaso6";

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
const TC = () => {
  //const ejemplo = Ejercicio1;
  const ejercicio = Ejercicio2;
  const [paso1Valido, setPaso1Valido] = useState(null);
  const [paso2Valido, setPaso2Valido] = useState(null);
  const [paso3Valido, setPaso3Valido] = useState(null);
  const [paso4Valido, setPaso4Valido] = useState(null);
  const [paso5Valido, setPaso5Valido] = useState(null);
  const [paso6Valido, setPaso6Valido] = useState(null);
  const [hintsTerminado, setHintsTerminado] = useState(null);
  const [hintsTerminado2, setHintsTerminado2] = useState(null);
  const [hintsTerminado3, setHintsTerminado3] = useState(null);
  const [hintsTerminado5, setHintsTerminado5] = useState(null);
  const [hintsTerminado6, setHintsTerminado6] = useState(null);
  const [index, setIndex] = useState([0]);

  useEffect(() => {
    //cierra paso 1 al completarlo
    if (paso1Valido != null) {
      setIndex([1]);
    }
  }, [paso1Valido]);

  useEffect(() => {
    //cierra paso 2 al completarlo
    if (paso2Valido != null) {
      setIndex([2]);
    }
  }, [paso2Valido]);

  useEffect(() => {
    //cierra paso 3 al completarlo
    if (paso3Valido != null) {
      setIndex([3]);
    }
  }, [paso3Valido]);

  useEffect(() => {
    //cierra paso 3 al completarlo
    if (paso4Valido != null) {
      setIndex([4]);
    }
  }, [paso4Valido]);

  useEffect(() => {
    //cierra paso 3 al completarlo
    if (paso5Valido != null) {
      setIndex([5]);
    }
  }, [paso5Valido]);

  return (
    <div>
      {/*Ejemplo diferencia de cubos 
            <TCejemplo ejemplo={ejemplo}></TCejemplo>
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
            <TCpaso1
              ejercicio={ejercicio.steps[0]}
              setPaso1Valido={setPaso1Valido}
              paso1Valido={paso1Valido}
              hintsTerminado={hintsTerminado}
              setHintsTerminado={setHintsTerminado}
            ></TCpaso1>
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
              <TCpaso2
                ejercicio={ejercicio.steps[1]}
                setPaso2Valido={setPaso2Valido}
                paso2Valido={paso2Valido}
                hintsTerminado={hintsTerminado2}
                setHintsTerminado={setHintsTerminado2}
              ></TCpaso2>
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
                {ejercicio.steps[2].step}
                {paso3Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso2Valido != null && (
              <TCpaso3
                ejercicio={ejercicio.steps[2]}
                setPaso3Valido={setPaso3Valido}
                paso3Valido={paso3Valido}
                hintsTerminado={hintsTerminado3}
                setHintsTerminado={setHintsTerminado3}
              ></TCpaso3>
            )}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Alert status={paso4Valido == null ? "info" : "success"}>
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 3)) {
                  setIndex(index.filter((e) => e !== 3));
                } else {
                  setIndex(index.concat(3));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {ejercicio.steps[3].step}
                {paso4Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso3Valido != null && (
              <TCpaso4
                ejercicio={ejercicio.steps[3]}
                setPaso4Valido={setPaso4Valido}
                paso4Valido={paso4Valido}
                hintsTerminado={hintsTerminado3}
                setHintsTerminado={setHintsTerminado3}
              ></TCpaso4>
            )}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Alert status={paso5Valido == null ? "info" : "success"}>
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 4)) {
                  setIndex(index.filter((e) => e !== 4));
                } else {
                  setIndex(index.concat(4));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {ejercicio.steps[4].step}
                {paso5Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso4Valido != null && (
              <TCpaso5
                ejercicio={ejercicio.steps[4]}
                setPaso5Valido={setPaso5Valido}
                paso5Valido={paso5Valido}
                hintsTerminado={hintsTerminado5}
                setHintsTerminado={setHintsTerminado5}
              ></TCpaso5>
            )}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Alert status={paso6Valido == null ? "info" : "success"}>
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 5)) {
                  setIndex(index.filter((e) => e !== 5));
                } else {
                  setIndex(index.concat(5));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {ejercicio.steps[5].step}
                {paso6Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso5Valido != null && (
              <TCpaso6
                ejercicio={ejercicio.steps[5]}
                setPaso6Valido={setPaso6Valido}
                paso6Valido={paso6Valido}
                hintsTerminado={hintsTerminado6}
                setHintsTerminado={setHintsTerminado6}
                a={ejercicio.steps[0].answers[0].answer}
              ></TCpaso6>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {/*            


                <Card bg={paso4Valido==null?"secondary":"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso3Valido!=null?(paso4Valido!=null?"4":"0"):"4"}>
                        {ejercicio.steps[3].step}
                        {paso4Valido!=null&&"    ✔ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso3Valido!=null?(paso4Valido!=null?"4":"0"):"4"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                    {//paso3Valido!=null&&<TCpaso4 ejercicio={ejercicio.pasos[3]} setPaso4Valido={setPaso4Valido} paso4Valido={paso4Valido}></TCpaso4>}
                    }
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg={paso5Valido==null?"secondary":"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso4Valido!=null?(paso5Valido!=null?"5":"0"):"5"}>
                        {ejercicio.steps[4].step}
                        {paso5Valido!=null&&"    ✔ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso4Valido!=null?(paso5Valido!=null?"5":"0"):"5"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                    {//paso4Valido!=null&&<TCpaso5 ejercicio={ejercicio.pasos[4]} setPaso5Valido={setPaso5Valido} paso5Valido={paso5Valido} hintsTerminado={hintsTerminado5} setHintsTerminado={setHintsTerminado5}></TCpaso5>}
}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg={paso6Valido==null?"secondary":"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso5Valido!=null?"0":"6"}>
                        {ejercicio.steps[5].step}
                        {paso6Valido!=null&&"    ✔ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso5Valido!=null?"0":"6"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                    {//paso5Valido!=null&&<TCpaso6 ejercicio={ejercicio.pasos[5]} setPaso6Valido={setPaso6Valido} paso6Valido={paso6Valido} hintsTerminado={hintsTerminado6} setHintsTerminado={setHintsTerminado6}></TCpaso6>}
                    }
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                */}
    </div>
  );
};

export default TC;
