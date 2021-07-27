export const Ejercicio1 = {
  itemId: 3000,
  itemTitle: "Diferencia de cuadrados",
  level: "1",
  text: "Texto problema/ejercicio, planteamiento",
  steps: [
    {
      stepId: "0",
      expression: "9x^2-1",
      step: "Paso 1: identificar terminos al cuadrado",
      result: "(3x)^2-(1)^2",
      hints: [
        {
          hintId: 0,
          hint: "Enfocarse en los valores que acompañan al cuadrado",
        },
        { hintId: 1, hint: "Un valor a ingresar es 1" },
        {
          hintId: 2,
          hint: "Los cuadrados son: (3x)² - (1)², donde los valores a ingresar son 3x y 1",
        },
      ],
      answers: [{ answer: ["3x", "1"], nextStep: "1" }],
      error:
        "No se han ingresado correctamente los términos que al cuadrado dan como resultado la expresión",
      validation: "Haz encontrado los términos al cuadrado",
    },
    {
      stepId: "1",
      expression: "(3x)^2-(1)^2",
      step: "Paso 2: ingresar suma por diferencia",
      result: "(3x+1)(3x-1)",
      hints: [
        { hintId: 0, hint: "Primer paréntesis ingresar suma" },
        { hintId: 1, hint: "Segundo paréntesis ingresar resta" },
        {
          hintId: 2,
          hint: "Factorización por suma y diferencia: (3x+1)(3x-1)",
        },
      ],
      //entrada:["3x+1","3x-1"],
      answers: [{ answer: ["3x+1", "3x-1"], nextStep: null }],
      error: "suma por diferencia mal ingresado",
      validation: "Haz factorizado por diferencia de cuadradros",
    },
  ],
};

export const Ejercicio2 = {
  prob_id: 3001,
  titulo: "Factorización por diferencia de cuadrados.",
  dificultad: "1",
  textoProblema: "Texto problema/ejercicio, planteamiento",
  pasos: [
    {
      expresion: "x^2-y^2",
      paso: "Paso 1: identificar terminos al cuadrado",
      explicacion: "",
      result_final: "(x)^2-(y)^2",
      hint_solicitado: [
        "Enfocarse en los valores que acompañan al cuadrado",
        "Un valor a ingresar es x",
        "Los cuadrados son: (x)^2 - (y)^2, donde los valores a ingresar son x e y",
      ],
      soluciones: [{ entrada: ["x", "y"], pasoSiguiente: "1" }],
      error:
        "no se han ingresado correctamente los términos que al cuadrado dan como resultado la expresión",
      //validacion:"Haz encontrado los términos al cuadrado"
    },
    {
      expresion: "(x)^2-(y)^2",
      paso: "Paso 2: ingresar suma por diferencia",
      explicacion: "",
      result_final: "(x+y)(x-y)",
      hint_solicitado: [
        "Primer paréntesis ingresar suma",
        "Segundo paréntesis ingresar resta",
        "Factorización por suma y diferencia: (x+y)(x-y)",
      ],
      entrada: ["x+y", "x-y"],
      error: "suma por diferencia mal ingresado",
      validacion: "Haz factorizado por diferencia de cuadradros",
    },
  ],
};

export const Ejercicio3 = {
  prob_id: 3001,
  titulo: "Factorización por diferencia de cuadrados.",
  dificultad: "1",
  textoProblema: "Texto problema/ejercicio, planteamiento",
  pasos: [
    {
      expresion: "4x^2y^4-16x^2y^2",
      paso: "Paso 1: identificar terminos al cuadrado",
      explicacion: "",
      result_final: "(2xy^2)^2-(4xy)^2",
      hint_solicitado: [
        "",
        "",
        "los cuadrados son: (2xy^2)^2 - (4xy)^2, donde los valores a ingresar son 2xy^2 e 4xy",
      ],
      soluciones: [
        { entrada: ["2xy^2", "4xy"], pasoSiguiente: "1" },
        { entrada: ["2y^2x", "4xy"], pasoSiguiente: "1" },
        { entrada: ["2xy^2", "4yx"], pasoSiguiente: "1" },
        { entrada: ["2y^2x", "4yx"], pasoSiguiente: "1" },
      ],
      error:
        "no se han ingresado correctamente los términos que al cuadrado dan como resultado la expresión",
      validacion: "Haz encontrado los términos al cuadrado",
    },
    {
      expresion: "(2xy^2)^2+(4xy)^2",
      paso: "Paso 2: ingresar suma por diferencia",
      explicacion: "",
      result_final: "(2xy^2+4xy)(2xy^2-4xy)",
      hint_solicitado: [
        "Primer paréntesis ingresar suma",
        "Segundo paréntesis ingresar resta",
        "factorización por suma y diferencia:",
      ],
      entrada: ["(2xy^2+4xy)", "(2xy^2-4xy)"],
      error: "suma por diferencia mal ingresado",
      validacion: "Haz encontrado la diferencia de cuadradros",
    },
  ],
};
