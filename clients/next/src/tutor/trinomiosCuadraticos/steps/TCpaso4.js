import React, { useState } from "react";
import { Form } from "react-bootstrap";

import {
  Alert,
  AlertIcon,
  Button,
  Grid,
  GridItem,
  Flex,
  Radio,
  RadioGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export const TCpaso4 = ({ ejercicio, setPaso4Valido, paso4Valido }) => {
  let idPasoSiguiente = null;
  const [estado, setEstado] = useState(null);
  const [value, setValue] = React.useState(); //checked radio
  const comparar = () => {
    if (ejercicio.answers[0].answer === value) {
      setPaso4Valido((paso4Valido = ejercicio.answers[0].nextStep));
      /*setEstado(
                <div className="alert alert-success"> 
                        <p>{ejercicio.validacion}:&nbsp;
                        {ejercicio.result_final}
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
        <WrapItem w={350}>
          <Flex align="center">
            &nbsp; &nbsp;
            <RadioGroup onChange={setValue} value={value}>
              <Radio value="1" isReadOnly={paso4Valido != null}>
                Factorizable con diferentes raices
              </Radio>
              <Radio value="2" isReadOnly={paso4Valido != null}>
                Factorizable con raices iguales
              </Radio>
              <Radio value="3" isReadOnly={paso4Valido != null}>
                No es factorizable (raíces complejas)
              </Radio>
            </RadioGroup>
          </Flex>
        </WrapItem>

        <WrapItem>
          <Flex align="center">
            {paso4Valido == null && (
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
      </Wrap>
      {/*
            <Row  style={{padding: 0}}>
                <Col style={{padding: 40}}>
                    <Form.Check
                    type="radio"
                    label="Factorizable con diferentes raices"
                    name="formHorizontalRadios"
                    id="1" style={{padding: 0}}
                    disabled = {paso4Valido!=null}
                    />
                    <Form.Check
                    type="radio"
                    label="Factorizable con raices iguales"
                    name="formHorizontalRadios"
                    id="2" style={{padding: 0}}
                    disabled = {paso4Valido!=null}
                    />
                    <Form.Check
                    type="radio"
                    label="No es factorizable (raíces complejas)"
                    name="formHorizontalRadios"
                    id="3" style={{padding: 0}}
                    disabled = {paso4Valido!=null}
                    />
                </Col>
                <Col style={{margin: 40}}>

                {paso4Valido==null&&<button className="btn btn-outline-success" onClick={comparar}>Aceptar</button>}
                </Col>
            </Row>*/}
      <br></br>
      {paso4Valido == null && estado}
    </>
  );
};
