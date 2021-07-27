export const Ejercicio1 = {
  itemId: 4000,
  itemTitle: "Factorización por diferencia de cubos.",
  sign: "-",
  level: "1",
  text: "Texto problema/ejercicio, planteamiento",
  steps: [
    {
      stepId: "0",
      expression: "x^3-y^3",
      step: "Paso 1: identificar términos al cubo",
      result: "(x)^3-(y)^3",
      hints: [
        { hintId: 0, hint: "Ingresar raices cúbicas de los valores" },
        { hintId: 1, hint: "Un valor al cubo a ingresar es x" },
        { hintId: 2, hint: "Los cubos a ingresar son: (x)³ - (y)³" },
      ],
      answers: [{ answer: ["x", "y"], nextStep: "1" }],
      error:
        "no se han ingresado correctamente los términos que al cubos dan como resultado la expresión",
      validation: "Haz encontrado los términos al cubo",
    },
    {
      stepId: "1",
      expression: "(x)^3-(y)^3",
      step: "Paso 2: ingresar la identidad (diferencia de cubos)",
      result: "(x-y)(x^2+xy+y^2)",
      hints: [
        { hintId: 0, hint: "Utilice identidad de cubos" },
        { hintId: 1, hint: "La identidad de cubos es (x±y)(x²±xy+y²)" },
        { hintId: 2, hint: "(x-y)(x²+xy+y²)" },
      ],
      //answers:["x-y","x^2+xy+y^2"],
      answers: [{ answer: ["x-y", "x^2+xy+y^2"], nextStep: null }],
      error: "valores mal ingresados",
      validation: "Haz encontrado la diferencia de cubos",
    },
  ],
};
export const Ejercicio2 = {
  prob_id: 4001,
  titulo: "Factorización por suma de cubos.",
  signo: "+",
  dificultad: "1",
  textoProblema: "Texto problema/ejercicio, planteamiento",
  pasos: [
    {
      expresion: "8x^3+y^3",
      paso: "Paso 1: identificar términos al cubo",
      explicacion: "",
      result_final: "(2x)^3+(y)^3",
      hint_solicitado: [
        "hint 1",
        "hint 2",
        "los cubos son: (2x)^3 + (y)^3, donde los valores a ingresar son x e y",
      ],
      soluciones: [{ entrada: ["2x", "y"], pasoSiguiente: "1" }],
      error:
        "no se han ingresado correctamente los términos que al cubos dan como resultado la expresión",
      validacion: "Haz encontrado los términos al cubo",
    },
    {
      expresion: "(2x)^3+(y)^3",
      paso: "Paso 2: ingresar la identidad (suma de cubos)",
      explicacion: "",
      result_final: "(2x+y)(4x^2-2xy+y^2)",
      hint_solicitado: [
        "hint 1",
        "hint 2",
        "Factorización por suma de cubos: (2x+y)(4x^2-2xy+y^2)",
      ],
      entrada: ["2x+y", "4x^2-2xy+y^2"],
      error: "Valores mal ingresados",
      validacion: "Haz encontrado la diferencia de cubos",
    },
  ],
};
