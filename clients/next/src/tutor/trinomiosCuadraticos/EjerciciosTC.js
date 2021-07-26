export const Ejercicio1 = {
    itemId : 5000,
    itemTitle : "Trinomios cuadráticos.",
    level:"1",
    text: "Texto problema/ejercicio, planteamiento",
    steps: [
        {
            stepId:"0",
            expression: "x^2+8x+12",
            step: "Paso 1: identificar el valor de a en la expresión dada",
            //explicacion:"Los valores de a, b y c provienen de una expresión cuadrática de la forma ax^2+bx+c",
            result:"a=1",
            hints:[
                {hintId:0, hint:"hint 1"},
                {hintId:1, hint:"hint 2"},
                {hintId:2, hint:"El valor de a es 1"}
            ],
            answers:[{answer:["1"],nextStep:"1"}],
            error:"no es el valor de a",
            validation:"Haz encontrado el valor de a"
        },
        {
            stepId:"1",
            expression: "x^2+8x+12",
            step: "Paso 2: identificar los valores de a, b y c de la expresión cuadrática",
            result:"a=1, b=8, c=12",
            hints:[
                {hintId:0, hint:"El valor de a es el que acompaña al x^2"},
                {hintId:1, hint:"El valor de a es 1"},
                {hintId:2, hint:"a =1, b=8, c=12"}
            ],
            //soluciones:[{entrada:["1","8","12"],pasoSiguiente:"2"}],
            answers:[{answer:["1","8","12"],nextStep:"2"}],
            error:"no son los valores correspondientes a los valores a, b y c",
            validation:"Haz identificado los valores de a, b y c"
        },
        {
            stepId:"2",
            expression: "a=1, b=8, c=12",
            step: "Paso 3: calcular discriminante",
            //explicacion:"utilice la fórmula Δ= b^2-4ac, donde a es el término que acompaña al cuadrado, b es el término que acompaña a la variable y c es el valor de la constante",
            result:"Δ=16",
            //hint_solicitado:["reemplace en la fórmula Δ por: a=1, b=8 y c=12",
            //"","el valor del discriminante es 16"],
            hints:[
                {hintId:0, hint:"reemplace en la fórmula Δ por: a=1, b=8 y c=12"},
                {hintId:1, hint:"Hint 2"},
                {hintId:2, hint:"El valor del discriminante es 16"}
            ],
            answers:[{answer:"16",nextStep:"3"}],
            error:"no se han ingresado correctamente el discriminante de la expresión",
            validation:"Haz calculado correctamente el discriminante"
        },
        {
            stepId:"3",
            expression: "Δ=16",
            step: "Paso 4: ¿a que caso corresponde el discriminante?",
            //explicacion:"Si el discriminante es mayor a 0 se puede factorizar y sus raices son diferentes, si es igual a 0 las dos raíces son iguales y si el discriminante es menor a 0, no es posible factorizar, por lo que tiene raices complejas",
            result:"Este ejercicio posee 2 raíces diferentes, Δ>0",
            answers:[{answer:"1",nextStep:"4"}],
            error:"caso mal ingresado",
            validation:"Haz descubierto a que caso corresponde el discriminante"
        },
        {
            stepId:"4",
            expression: "Δ = 16, a = 1, b = 8, c = 12 ",
            step: "Paso 5: Calcular los valores de x1 y x2",
            formula:["x_{1}=\\frac{-b+\\sqrt{Δ}}{2a}","x_{2}=\\frac{-b-\\sqrt{Δ}}{2a}"],
            //explicacion:"",
            result:"x_{1}=-2, x_{2}=-6",
            //hint_solicitado:["utilice la fórmula cuadrática","el valor de x1=-2 y x2=-6"],
            hints:[
                {hintId:0, hint:"utilice la fórmula cuadrática"},
                {hintId:1, hint:"Hint 2"},
                {hintId:2, hint:"El valor de x1=-2 y x2=-6"}
            ],
            answers:[{answer:["-2","-6"],nextStep:"5"}],
            error:"raices mal ingresadas",
            validation:"Haz encontrado las raices del polinomio"
        },
        {
            stepId:"5",
            expression: "x_{1}=-2, x_{2}=-6",
            step: "Paso 6: Ingresar factorización por trinomios cuadráticos",
            //explicacion:"",
            result:"(x+2)(x+6)",
            //hint_solicitado:["hint 1","hint 2","(x+2)(x+6)"],
            hints:[
                {hintId:0, hint:"Hint 1"},
                {hintId:1, hint:"Hint 2"},
                {hintId:2, hint:"(x+2)(x+6)"}
            ],
            entrada:[["x+2","x+6"],["x+6","x+2"]],
            answers:[{answer:[["x+2","x+6"],["x+6","x+2"]],nextStep:null}],
            error:"error en la factorización",
            validation:"Haz factorizado por trinomios cuadráticos correctamente"
        }
    ]
}