let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
let campoImposto = document.getElementById('campo-imposto')!;

let saldoTot = 0
let impostoTot = 0

limparSaldo()
limparImposto()

function somarAoSaldo(soma:number) {
    if (campoSaldo){

        saldoTot += soma
        campoSaldo.innerHTML = saldoTot.toString();
        limparCampoSoma();
    }
}

function calcularImposto(){

    if (saldoTot <= 1903.98 ){

        impostoTot = 0;

    } else if (saldoTot >= 1903.99 && saldoTot <= 2826.65){

        impostoTot = saldoTot * 7.5 / 100;

    } else if (saldoTot >= 2826.66 && saldoTot <= 3751.05){

        impostoTot = saldoTot * 15 / 100;

    } else if (saldoTot >= 3751.06 && saldoTot <= 4664.68){

        impostoTot = saldoTot * 22.5 / 100;

    } else {

        impostoTot = saldoTot * 27.5 / 100;
    }

    return campoImposto.innerHTML = impostoTot.toString();
}


function limparCampoSoma() {

    soma.value = " ";
}

function limparSaldo() {
    if (campoSaldo){

        saldoTot = 0;
        campoSaldo.innerHTML = saldoTot.toString();
    }
}

function limparImposto(){

    if (campoImposto){

        impostoTot = 0;
        campoImposto.innerHTML = impostoTot.toString();
    }
}

if (botaoAtualizar) {
    
    botaoAtualizar.addEventListener('click', function () { 
        somarAoSaldo(Number(soma.value));
        calcularImposto();
});

}

botaoLimpar.addEventListener('click', function () {
        limparSaldo();
        limparImposto();
});