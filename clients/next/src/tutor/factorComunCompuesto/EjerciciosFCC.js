export const Ejercicio1 = {
  ItemId: 2000,
  itemTitle: "Factor común compuesto",
  level: "3",
  text: "Resolver el siguiente ejercicio de factorización por factor común compuesto",
  //enunciado
  steps: [
    {
      stepId: "0",
      expression: "ax + bx + ay + by",
      step: "Paso 1: agrupe los sumandos",
      result: ["(ax + ay) + (bx + by)", "(ax + bx) + (ay + by)"],
      hints: [
        { hintId: 0, hint: "agrupa los sumandos con términos que se repiten" },
        { hintId: 1, hint: "agrupa los sumandos con constantes iguales" },
        { hintId: 2, hint: "los grupos a ingresar son: (ax + ay) + (bx + by)" },
      ],
      answers: [
        { answer: ["ax+ay", "bx+by"], nextStep: "1" },
        { answer: ["ay+ax", "bx+by"], nextStep: "1" },
        { answer: ["ax+ay", "by+bx"], nextStep: "1" },
        { answer: ["ay+ax", "by+bx"], nextStep: "1" },
        { answer: ["ax+bx", "ay+by"], nextStep: "2" },
        { answer: ["bx+ax", "ay+by"], nextStep: "2" },
        { answer: ["ax+bx", "by+ay"], nextStep: "2" },
        { answer: ["bx+ax", "by+ay"], nextStep: "2" },
      ],
      error: "no se ha agrupado correctamente la expresión",
      validation: "Has agrupado los sumandos",
    },
    {
      stepId: "1",
      expression: "(ax + ay) + (bx + by)",
      step: "Paso 2: ingrese el factor común de cada grupo",
      result: [
        ["(a)", "(x+y)"],
        ["(b)", "(x+y)"],
      ],
      hints: [
        {
          hintId: 0,
          hint: "El factor común del primer grupo es el término que se repite en ambos sumando",
        },
        { hintId: 1, hint: "El factor común del primer grupo es a" },
        { hintId: 2, hint: "Los factores comunes a ingresar son a y b" },
      ],
      answers: { answer: ["a", "b"], nextStep: "3" },
      //soluciones: {entrada:["a","b"], pasoSiguiente: "3"} ,
      error:
        "factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
      validation: "Has encontrado el factor común",
    },
    {
      stepId: "2",
      expression: "(ax + bx) + (ay + by)",
      step: "Paso 2: ingrese el factor común de cada grupo",
      //explicacion:"a cada uno de los grupos de sumandos ingrese su factor común",
      result: [
        ["(x)", "(a+b)"],
        ["(y)", "(a+b)"],
      ],
      hints: [
        {
          hintId: 0,
          hint: "El factor común del primer grupo es el término que se repite en ambos sumando",
        },
        { hintId: 1, hint: "El factor común del primer grupo es x" },
        { hintId: 2, hint: "Los factores comunes a ingresar son x e y" },
      ],
      answers: { answer: ["x", "y"], nextStep: "4" },
      error:
        "factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
      validation: "Haz encontrado el factor común",
    },
    {
      stepId: "3",
      expression: "a(x+y)+b(x+y)",
      step: "Paso 3: ingrese el factor común",
      //explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
      //result_variable:[],
      //hint_result_var:"",
      result: "(a+b)",
      hints: [
        { hintId: 0, hint: "ver variable que se repite en ambos sumandos" },
        { hintId: 1, hint: "el factor común es una suma de variables" },
        { hintId: 2, hint: "el factor común de la expresión es: x + y" },
      ],
      //entrada:["x+y"],
      answers: [{ answer: "x+y", nextStep: null }],
      error:
        "factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
      validation: "Haz encontrado el factor común  compuesto",
    },
    {
      stepId: "4",
      expression: "x(a+b)+y(a+b)",
      step: "Paso 3: ingrese el factor común",
      //explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
      //result_variable:[],
      //hint_result_var:"",
      result: "(x+y)",
      //hint_solicitado:["ver variable que se repite en ambos sumandos","el factor común es a + b"],
      hints: [
        { hintId: 0, hint: "Ver variable que se repite en ambos sumandos" },
        { hintId: 1, hint: "El factor común es una suma de variables" },
        { hintId: 2, hint: "El factor común de la expresión es: a + b" },
      ],
      //entrada:["a+b"],
      answers: [{ answer: "a+b", nextStep: null }],
      error:
        "factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
      validation: "Has factorizado por factor común compuesto",
    },
  ],
};

export const Ejercicio2 = {
  prob_id: 2001,
  titulo: "Factorización por factor común compuesto.",
  dificultad: "3",
  textoProblema: "Texto problema/ejercicio, planteamiento",
  pasos: [
    {
      id: "0",
      expresion: "2ax + 2bx - ay + 5a - by + 5b",
      paso: "Paso 1: agrupe los sumandos",
      explicacion: "agrupar los sumandos según los términos en común",
      result_final: ["(2ax - ay + 5a) + (2bx - by + 5b)"],
      hint_solicitado: [
        "agrupa los sumandos con términos que se repiten (comenzar con los primeros términos de los sumandos)",
        "agrupa los sumandos con constantes iguales",
        "los grupos son: (2ax - ay + 5a) + (2bx - by + 5b)",
      ],
      soluciones: [
        { entrada: ["2ax-ay+5a", "2bx-by+5b"], pasoSiguiente: "1" },
        { entrada: ["2ax-ay+5a", "2bx+5b-by"], pasoSiguiente: "1" },
        { entrada: ["2ax-ay+5a", "-by+2bx+5b"], pasoSiguiente: "1" },
        { entrada: ["2ax-ay+5a", "-by+5b+2bx"], pasoSiguiente: "1" },
        { entrada: ["2ax-ay+5a", "5b+2bx-by"], pasoSiguiente: "1" },
        { entrada: ["2ax-ay+5a", "5b-by+2bx"], pasoSiguiente: "1" },

        { entrada: ["2ax+5a-ay", "2bx-by+5b"], pasoSiguiente: "1" },
        { entrada: ["2ax+5a-ay", "2bx+5b-by"], pasoSiguiente: "1" },
        { entrada: ["2ax+5a-ay", "-by+2bx+5b"], pasoSiguiente: "1" },
        { entrada: ["2ax+5a-ay", "-by+5b+2bx"], pasoSiguiente: "1" },
        { entrada: ["2ax+5a-ay", "5b+2bx-by"], pasoSiguiente: "1" },
        { entrada: ["2ax+5a-ay", "5b-by+2bx"], pasoSiguiente: "1" },

        { entrada: ["-ay+2ax+5a", "2bx-by+5b"], pasoSiguiente: "1" },
        { entrada: ["-ay+2ax+5a", "2bx+5b-by"], pasoSiguiente: "1" },
        { entrada: ["-ay+2ax+5a", "-by+2bx+5b"], pasoSiguiente: "1" },
        { entrada: ["-ay+2ax+5a", "-by+5b+2bx"], pasoSiguiente: "1" },
        { entrada: ["-ay+2ax+5a", "5b+2bx-by"], pasoSiguiente: "1" },
        { entrada: ["-ay+2ax+5a", "5b-by+2bx"], pasoSiguiente: "1" },

        { entrada: ["-ay+5a+2ax", "2bx-by+5b"], pasoSiguiente: "1" },
        { entrada: ["-ay+5a+2ax", "2bx+5b-by"], pasoSiguiente: "1" },
        { entrada: ["-ay+5a+2ax", "-by+2bx+5b"], pasoSiguiente: "1" },
        { entrada: ["-ay+5a+2ax", "-by+5b+2bx"], pasoSiguiente: "1" },
        { entrada: ["-ay+5a+2ax", "5b+2bx-by"], pasoSiguiente: "1" },
        { entrada: ["-ay+5a+2ax", "5b-by+2bx"], pasoSiguiente: "1" },

        { entrada: ["5a+2ax-ay", "2bx-by+5b"], pasoSiguiente: "1" },
        { entrada: ["5a+2ax-ay", "2bx+5b-by"], pasoSiguiente: "1" },
        { entrada: ["5a+2ax-ay", "-by+2bx+5b"], pasoSiguiente: "1" },
        { entrada: ["5a+2ax-ay", "-by+5b+2bx"], pasoSiguiente: "1" },
        { entrada: ["5a+2ax-ay", "5b+2bx-by"], pasoSiguiente: "1" },
        { entrada: ["5a+2ax-ay", "5b-by+2bx"], pasoSiguiente: "1" },

        { entrada: ["5a-ay+2ax", "2bx-by+5b"], pasoSiguiente: "1" },
        { entrada: ["5a-ay+2ax", "2bx+5b-by"], pasoSiguiente: "1" },
        { entrada: ["5a-ay+2ax", "-by+2bx+5b"], pasoSiguiente: "1" },
        { entrada: ["5a-ay+2ax", "-by+5b+2bx"], pasoSiguiente: "1" },
        { entrada: ["5a-ay+2ax", "5b+2bx-by"], pasoSiguiente: "1" },
        { entrada: ["5a-ay+2ax", "5b-by+2bx"], pasoSiguiente: "1" },
      ],
      error: "no se ha agrupado correctamente la expresión",
      validacion: "Haz agrupado los sumandos",
    },
    {
      id: "1",
      expresion: "(2ax-ay+5a) + (2bx-by+5b)",
      paso: "Paso 2: ingrese el factor común de cada grupo",
      explicacion:
        "a cada uno de los grupos de sumandos ingrese su factor común",
      result_final: [
        ["(a)", "(2x-y+5)"],
        ["(b)", "(2x-y+5)"],
      ],
      hint_solicitado: [
        "los grupos de sumandos son los que estan en parentesis",
        "hint2",
        "hint3",
      ],
      soluciones: { entrada: ["a", "b"], pasoSiguiente: "2" },
      error:
        "factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
      validacion: "Haz encontrado el factor común",
    },
    {
      expresion: "a(2x-y+5)+b(2x-y+5)",
      paso: "Paso 3: ingrese el factor común",
      explicacion:
        "En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
      //result_variable:[],
      //hint_result_var:"",
      result_final: "(2x-y+5)(a+b)",
      hint_solicitado: [
        "ver variable que se repite en ambos sumandos",
        "el factor común de la expresión es: x + y",
      ],
      entrada: ["2x-y+5", "2x+5-y", "-y+2x+5", "-y+5+2x", "5+2x-y", "5-y+2x"],
      error:
        "factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
      validacion: "Haz encontrado el factor común compuesto",
    },
  ],
};
