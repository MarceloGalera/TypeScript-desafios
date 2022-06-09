export {}   // caso não tenha esse export, vai dar erro falando que não é possível declarar novamente a variável de escopo

let botaoAtualizar = document.getElementById('atualizar-saldo')!;
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;   // tem que explicitar que é um HTML
let campoSaldo = document.getElementById('campo-saldo')!;
let saldoTotal = 0      // inicializa o saldo com 0


function somarAoSaldo(soma) {        // poderia colocar um tipo number
    saldoTotal += soma      // saldoTotal = saltoTotal + soma
    campoSaldo.innerHTML = saldoTotal.toString();
    soma.value = "";
}


function limparSaldo() {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
}


botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));   // chama a função somarAoSaldo, somando o número com o campo saldoTotal
});


botaoLimpar.addEventListener('click', () => {
    limparSaldo();      // transforma o saldoTotal em 0
});


/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */