import React, { useState } from "react";
import {
  useToast,
  Button,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

const Hint = ({ ejercicio, setHintsTerminado }) => {
  const [hint, setHint] = useState(null);

  const [i, setI] = useState(0);

  const toast = useToast();

  const ayuda = () => {
    if (ejercicio[i + 1] != null) {
      setI(i + 1);
    } else {
      setHintsTerminado(i);
    }

    setHint(() =>
      toast({
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        render: () => (
          <Alert p={3}>
            <AlertIcon></AlertIcon>
            <p> {ejercicio[i].hint} </p>
          </Alert>
        ),
      })
    );
  };

  return (
    <div>
      <Button onClick={ayuda} colorScheme="cyan" variant="outline" size="sm">
        Hint {i + 1}
      </Button>
    </div>
  );
};

export default Hint;
