
//DESAFIO 01
/*Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";*/

//Solução 01
let employee = {
    code: 10,
    name: 'Jhon'
};

//Solução 02
let employee2: { code: number, name: string } = {
    code: 10,
    name: 'Jhon'
}


//DESAFIO 02
// Como podemos melhorar o esse código usando TS? 

/*let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/


//Solução 01
enum Profissao {
    atriz,
    padeiro,
    Desenvolvedor
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.atriz

}

const pessoa2: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.padeiro
}


//Solucao 02
class Pessoa {
    nome: string;
    idade: number;
    profissao?: Profissao

    constructor(nome: string, idade: number, profissao?: Profissao) {
        this.nome = nome,
            this.idade = idade,
            this.profissao = profissao
    }
}


let pessoa3 = new Pessoa(
    "Laura",
    19,
    Profissao.atriz
)

let pessoa4 = new Pessoa(
    "carlos",
    19,
    Profissao.padeiro
)




//DESAFIO 03
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

type input = string | number;

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = (<HTMLSelectElement>document.getElementById('soma'));
let campoSaldo = (<HTMLSelectElement>document.getElementById('campo-saldo'));

campoSaldo.innerHTML = "0"


function somarAoSaldo(soma: string) {
    var parseSoma = parseInt(soma);

    if(isNaN(parseSoma)){
        alert('Operacao nao realizada!')
        parseSoma = 0;
        }

    var capSaldo: string;
    capSaldo = campoSaldo?.innerText;
    var parseCapSoma = parseInt(capSaldo);
    var totalSoma = parseSoma + parseCapSoma;
    campoSaldo.innerHTML = totalSoma.toString();


}

function limparSaldo() {
    campoSaldo.innerHTML = '0';

}

botaoAtualizar?.addEventListener('click', () => {
    somarAoSaldo(soma.value)
    // somarAoSaldo(soma.value);
});

botaoLimpar?.addEventListener('click', () => {
    limparSaldo();
});
