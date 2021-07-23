

// screenS = screen Global
//Val = valor global
//operator = oper global.

//* Função que adiciona os números no Visor quando pressionado os botões
function calcNum(num) {

    if (typeof screenS == 'undefined') { //screenS variavel global
        document.calcform.screen.value = '';
    }
    document.calcform.screen.value = document.calcform.screen.value + num;
    

    screenS = 1; 
}

//* Função que limpa a calculadora e todas as variáveis existentes.
function calcLimpar() {
    document.calcform.screen.value = '';
    delete val;
    delete operator;
    delete screenS; 
}

//* Função que executa as operações básicas da calculadora
function calcOper(oper, valor1, valor2) {
    if (oper == "somar") {
        var valor = parseFloat(valor1) + parseFloat(valor2);
    } else {
        if (oper == "subtrair") {
            var valor = valor1 - valor2;
        } else {
            if (oper == "multiplicar") {
                var valor = valor1 * valor2;
            } else {
                var valor = valor1 / valor2;
            }
        }
    }

    return (valor);
}

//* Função do algoritmo de "passagem" das ações do usuário
function calcParse(oper) {
    var valor = document.calcform.screen.value;
    delete screenS;

    if (typeof operator != 'undefined' && oper == 'resultado') {
        val = calcOper(operator, val, valor);
        document.calcform.screen.value = val;
        delete oper;
        delete val;
        return (0);
    }
 
    if (typeof val != 'undefined') {
        val = calcOper(operator, val, valor);
        operator = oper;
        document.calcform.screen.value = val;
    } else {
        val = valor;
        operator = oper;
    }

}




















































































































