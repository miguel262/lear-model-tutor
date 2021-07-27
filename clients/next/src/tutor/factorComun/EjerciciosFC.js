export const Ejercicio1 = {
  itemId: 1000,
  itemTitle: "Factor común",
  level: "3",
  text: "Texto problema/ejercicio, planteamiento",
  steps: [
    {
      stepId: 0,
      expression: "6xy^2 - 15x^2y + 21x^2y^2",
      step: "Paso 1: Ingrese el factor común de la siguiente expresión: ",
      result: "(2y-5x+7xy)",
      //hint_solicitado:["Un factor común de esta ecuación es 3, pero la eexpresión todavía es factorizable","Otro factor común es 3x, pero todavía se puede agregar otro valor al factor común","El factor común de la expresión es 3xy"],
      hints: [
        {
          hintId: 0,
          hint: "Un factor común de esta expresión es 3, pero todavía es factorizable",
        },
        {
          hintId: 1,
          hint: "Otro factor común es 3x, pero todavía se puede agregar otro valor al factor común",
        },
        { hintId: 2, hint: "El factor común de la expresión es 3xy" },
      ],
      answers: [
        { answer: "3xy", nextStep: null },
        { answer: "3yx", nextStep: null },
      ],
      error:
        "Factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
      validation: "Haz encontrado el factor común",
    },
  ],
};

export const Ejercicio2 = {
  itemId: 1001,
  itemTitle: "Factor común",
  level: "3",
  text: "Texto problema/ejercicio, planteamiento",
  steps: [
    {
      stepId: 0,
      expression:
        "\\frac{5x^6}{3y^2} - \\frac{10x^2}{21y}- \\frac{20x^3}{9y^4}",
      step: "Ingrese el factor común de la siguiente expresión: ",
      result:
        "( \\frac{5x^2}{3y} )( \\frac{x^4}{y} - \\frac{2}{7} - \\frac{4x}{3y^3} )",
      hints: [
        {
          hintId: 0,
          hint: "Un factor común de esta expresión es 5/3, pero la expresión todavía es factorizable",
        },
        {
          hintId: 1,
          hint: "Otro factor común es 5x^2/3, pero todavía se puede agregar otro valor al factor común",
        },
        { hintId: 2, hint: "El factor común de la expresión es (5x^2)/(3y)" },
      ],
      answers: [
        { answer: "(5x^2)/(3y)", nextStep: null },
        { answer: "5x^2/(3y)", nextStep: null },
      ],
      error:
        "Factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
      validation: "Haz encontrado el factor común",
    },
  ],
};
export const Ejercicio3 = {
  itemId: 1002,
  itemTitle: "Factor común",
  level: "1",
  text: "Texto problema/ejercicio, planteamiento",
  steps: [
    {
      stepId: 0,
      expression: "2x^2y+3x^2z",
      step: "Ingrese el factor común de la siguiente expresión: ",
      result: "(x^2)(2y+3z)",
      hints: [
        {
          hintId: 0,
          hint: "Un factor común de esta ecuación es x, pero la eexpresión todavía es factorizable",
        },
        { hintId: 1, hint: "Es un valor elevado al cuadrado" },
        { hintId: 2, hint: "El factor común de la expresión es x^2" },
      ],
      answers: [{ answer: "x^2", nextStep: null }],
      error:
        "Factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
      validation: "Haz encontrado el factor común",
    },
  ],
};
export const Ejercicio4 = {
  itemId: 1003,
  itemTitle: "Factor común",
  level: "1",
  text: "Texto problema/ejercicio, planteamiento",
  steps: [
    {
      stepId: 0,
      expression: "12x+18y-24z",
      step: "Ingrese el factor común de la siguiente expresión: ",
      result: "(6)(2x+3y-4z)",
      hints: [
        {
          hintId: 0,
          hint: "El factor común de esta expresión es una constante",
        },
        {
          hintId: 1,
          hint: "Un factor común de esta ecuación es 3, pero la expresión todavía es factorizable",
        },
        { hintId: 2, hint: "El factor común de la expresión es 6" },
      ],
      answers: [{ answer: "6", nextStep: null }],
      error:
        "factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
      validation: "Haz encontrado el factor común",
    },
  ],
};

export const Ejercicio5 = {
  itemId: 1004,
  itemTitle: "Factor común",
  level: "4",
  text: "Texto problema/ejercicio, planteamiento",
  steps: [
    {
      stepId: 0,
      expression: "\\frac{x^{20}}{20} + \\frac{x^{10}}{10} - \\frac{x^5}{5}",
      step: "Ingrese el factor común de la siguiente expresión: ",
      result: "(\\frac{x^5}{5})(\\frac{x^15}{4} + \\frac{x^5}{2} - 1)",
      hints: [
        {
          hintId: 0,
          hint: "Un factor común de esta ecuación es 1/5, pero la eexpresión todavía es factorizable",
        },
        {
          hintId: 1,
          hint: "Otro factor común es x/5, pero todavía se puede agregar otro valor al factor común",
        },
        { hintId: 2, hint: "El factor común de la expresión es x^5/5" },
      ],
      //entrada:["x^5/5","(x^5)/5","(x^5)/(5)"],
      answers: [
        { answer: "x^5/5", nextStep: null },
        { answer: "(x^5)/5", nextStep: null },
        { answer: "(x^5)/(5)", nextStep: null },
      ],
      error:
        "Factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
      validacion: "Haz encontrado el factor común",
    },
  ],
};

export const Ejercicio6 = {
  itemId: 1005,
  itemTitle: "Factor común",
  level: "3",
  text: "Texto problema/ejercicio, planteamiento",
  steps: [
    {
      stepId: 0,
      expression: "10y^5-30xy^5-15xy^6",
      step: "Ingrese el factor común de la siguiente expresión: ",
      result: "(5y^5)(2-6x-3xy)",
      hints: [
        {
          hintId: 0,
          hint: "Un factor común de esta ecuación es 5, pero la eexpresión todavía es factorizable",
        },
        {
          hintId: 1,
          hint: "Otro factor común es 5y, pero todavía se puede agregar otro valor al factor común",
        },
        { hintId: 2, hint: "El factor común de la expresión es 5y^5" },
      ],
      answers: [{ answer: "5y^5", nextStep: null }],
      error:
        "Factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
      validation: "Haz encontrado el factor común",
    },
  ],
};

export const Ejercicio7 = {
  itemId: 1006,
  itemTitle: "Factor común",
  level: "4",
  text: "Texto problema/ejercicio, planteamiento",
  steps: [
    {
      stepId: 0,
      expression: "6x^2yz-30xy^2z^2+12x^2y^2z^2",
      step: "Ingrese el factor común de la siguiente expresión: ",
      result: "(6xyz)(x-5yz+2xyz)",
      hints: [
        {
          hintId: 0,
          hint: "Un factor común de esta ecuación es 6, pero la eexpresión todavía es factorizable",
        },
        {
          hintId: 1,
          hint: "Otro factor común es 6x, pero todavía se puede agregar otro valor al factor común",
        },
        { hintId: 2, hint: "El factor común de la expresión es 6xyz" },
      ],
      answers: [
        { answer: "6xyz", nextStep: null },
        { answer: "6xzy", nextStep: null },
        { answer: "6yxz", nextStep: null },
        { answer: "6yzx", nextStep: null },
        { answer: "6zxy", nextStep: null },
        { answer: "6zyx", nextStep: null },
      ],
      error:
        "factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
      validation: "Haz encontrado el factor común",
    },
  ],
};
