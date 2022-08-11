//var, let, const
//var -> ES5 -  cross-browser
//let e const -> ES2015
//undefined, null, symbol (ES2015)

var teste = "minha string";
console.log(teste);

var numero = 10;
console.log(numero);

var primeiraVar = "minha string :)";
console.log(primeiraVar);

var segundaVar = 'minha string :(';
console.log(segundaVar);

var testeVar1 = "minha 'string' com aspas simples";
console.log(testeVar1);

var testeVar2 = 'minha "string" com aspas duplas';
console.log(testeVar2);

var minhaVar3 = `minha template literal`;
console.log(minhaVar3);

var idd = 40;
var txtIdd = "minha idade é: ";
var anos = " anos";
console.log(txtIdd+idd+anos);
//ou
console.log(txtIdd+"17"+anos)

console.log(typeof idd, typeof testeVar1, typeof anos, "--", "20");

var n1 = 1;
var n2 = 1.3;
var n3 = 7;
console.log("7 multiplicado por 1,3 é: " + n3*n2);
console.log(`O tipo da variavel n2 é: ${typeof n2} `);

var semValor;
console.log(semValor);
console.log(typeof semValor);
semValor = 1;
console.log(typeof semValor, semValor);

var semValor = null;
console.log(semValor);
console.log(typeof semValor);
semValor = 1;
console.log(typeof semValor, semValor);

let n11 = 10;
let n22 = "10";
console.log(n11*n22, typeof n11, typeof n22);

//Transformar string em number [parseFloat(var ou string a ser transformada)]
//Transformar number em string [toString()  1-> para hexadecimais  2-> para binarios]

//Operadores aritmeticos [+ - * % / **(potencia)]

let n12 = 12;
let n21 = 4;
console.log(n12+n21);
console.log(n12/n21);
console.log(n12+(n21*n21));

//Operadores de atribuiçao

var cc4 = 20; // "=" atribuiçao
//cc4 = cc4 + 15; ou
cc4 += 15;
console.log(cc4);

// Incremento ou Decremento

var ii = 0;
//ii += 1; ou
ii++;
var oo = 0;
//oo -= 1; ou
oo--;
console.log(ii);
console.log(oo);

//Comparaçao
/*
igualdade de valor ==
igualdade de valor e tipo ===
<, >, <=, >=
!= valores diferentes
!== valores e tipos diferentes
*/

var tiv = 10;
var teste = 2;
var teste1 = 10;
var teste2 = "10";
console.log(tiv == teste);
console.log(tiv === teste2);
console.log(tiv != teste);
console.log(tiv !== teste);
console.log(tiv != teste1);

//Operadores logicos AND(&&  comparaçao de igualdade) OR(||  "ou") NOT(!  oposto)

/* Para alguem poder viajar para o exterior precisa ter 18 anos ou ter os pais presentes e ter comprado a passagem*/

let idade = 27;
let paisPresentes = false;
let comprouPassagem = false;
const podeViajar = (idade >= 18 || paisPresentes === true) && comprouPassagem;
console.log(`Pode viajar: ${podeViajar}`);

if(!comprouPassagem){
    if (idade >= 18){
        console.log("A passagem não foi comprada, mas poderá ser feita a compra!")
    } else {
        console.log("A passagem não foi comprada e não poderá ser feita pelo menor!")
    }
} else {
    if (idade >= 18){
        console.log("A passagem foi comprada pelo viajante!")
    } else {
        console.log("A passagem foi comprada pelo responsável do menor!")
    }
}

let msgMaiorIdade = (18 <= idade) ? "É maior de idade" : "É menor de 18 anos";
console.log(msgMaiorIdade);

var n1 = 5;
var n2 = 5;
media = (n1 + n2) / 2;

if (n1 === 0 && n2 ===0){
    console.log("Reprovado!")
} else {
    if (10 == media){
        console.log("Você está com a nota máxima de média!")
    } else if (10 > media && media >= 7){
        console.log("Você está acima da média, parabéns!")
    } else if (7 > media && media >3){
        console.log("Você está de exame!")
    } else if (3 > media && media > 0 ){
        console.log("Você está de dependência!")
    }
    }
    
//FALSY VALUES -> 0, "", NaN, undedfined, null, false
//TRUTHY -> todos os demais valores

if(false){
    console.log("true")
} else {
    console.log("false")
}

if(true){
    console.log("true")
} else {
    console.log("false")
}

var n = 0;
n = n || 10;
console.log(n);

var isValid = true;
/*if(isValid){
    console.log("é valido")
}*/

isValid && console.log("é valido");

var diaSemana = 3
var dia =""

switch(diaSemana){
    case 0:
        dia = "segunda"
        break
    case 1:
        dia = "terça"
        break
    case 2:
        dia = "quarta"
        break
    case 3:
        dia = "quarta"
        break
    case 4:
        dia = "quinta"
        break
    case 5:
        dia = "sexta"
        break
    case 6:
        dia = "sábado"
        break
    case 7:
        dia = "domingo"
        break
    default:
        dia = "--"    
}

console.log(`hoje é ${dia}`)


// REPETIÇÃO -> while, for, do while
//document.write(`1 x ${numeroUser} = ${1 * numeroUser}`)
/*
var indice = 0
var numeroUser = prompt("Digite um número")

while(indice <= 10){
    document.write(`${indice} x ${numeroUser} = ${indice * numeroUser} <br>`)
    indice ++
}
document.write(`saiu do loop while <br>`)

do{
    if(indice >10){
        alert("indice maior que dez!")
        break
    }
    document.write(`${numeroUser} x ${indice} = ${indice * numeroUser} <br>`)
    indice ++
} while(indice <= 10)

document.write(`saiu do loop do while <br>`)

for(var j = 0; j <= 10; j++){
    if(j === 2){
        continue
    }
    document.write(`${numeroUser} x ${j} = ${j * numeroUser} <br>`)
}
document.write(`saiu do loop for <br>`)

//Declaração de função

function ola1(){
    console.log("Olá mundo!")
}
ola1()

const ola2 = function(){
    console.log("Olá mundo em function expression")
}
ola2()

//Arrow functions

const ola3 = () => {
    console.log("Olá mundo em arrow functions")
}
ola3()
*/
//Retorno de valores

function obtemDiaSemana(){
    return new Date().getDay()
}
console.log(obtemDiaSemana())

function somar(n1 = 0, n2 = 0){
    return n1 + n2
}
console.log(somar(2, 4))

//Escopo

var n="GLOBAL"

function mostrarN(){
    var n ="LOCAL"
    console.log(`o valor de N é :` + n)
}

console.log(`o valor de N é: ${n}`)
mostrarN()

function fnExt(){
    var n = "n da funcao externa"

    function fnInt(){
        var n = "n da funcao interna"
        console.log(n)
    }

    fnInt()
    console.log(n)
}

fnExt()

//Arrays

const arr = new Array()
console.log(arr)
console.log(typeof arr)
const arr2 = new Array(true, "Mateus", 28, new Array(2, 4 ,9))
console.log(arr2)

//Para acessar uma array, voce utiliza os indices, que por sua vez comeca em 0

console.log(arr2[0])
console.log(arr2[1])
console.log(arr2[2])
console.log(arr2[3])
console.log(arr2[3][2])

console.log(arr2[3].length)

const arr3 = [1, "oi", false, [1, 2], ["io", "oi"]]
console.log(arr3)
arr3[5] = true
console.log(arr3)
arr3.push(arr2, "bye", false)
console.log(arr3)

//objetos

//var idadeArr = [23, 24, 19]
//var nomeArr = ["Daniel", "Lucas", "Yuri"]
//console.log(idadeArr[0], nomeArr[0])

const pessoas =  new Object()
pessoas.nome = "Daniel"
pessoas.idade = 25
console.log(pessoas)
var prop = "nome"
console.log(pessoas[prop])
console.log(pessoas.idade)
console.log(pessoas["idade"])

const nomes = ["Joao", "Maria", "Jose", "Lucas"]

for (var k = 0; k < nomes.length; k++){
    console.log(`${k} Nomes: ${nomes[k]}`)
}

const pessoinhas = {
    nome: "Maria",
    idade: 28,
    "email": "ela@server.com"
}

console.log(pessoinhas)

for(var prope in pessoinhas){
    console.log(prope)
    console.log(pessoinhas[prope])
}

const produto = {
    nome: "caneta",
    qtd: 10,
    comprar: function(n){
        if(n > this.qtd){
            return "quantidade não disponível"
        }
    this.qtd -= n
    },
    tst1: function(){
        console.log("Teste 1")
        console.log(this)
    },

    tst2: () => {
        console.log("Teste 2")
        console.log(this)
    }
}

/*produto.comprar (3)
console.log(produto)

produto.comprar (3)
console.log(produto)

produto.comprar (13)
console.log(produto) nao comprou*/

//produto.tst1()
//produto.tst2()

//const nomes = ["", "", ""]
//const pessoa = {nome: "", idade: , "email": }
//const pessoa 2 = {}

var people = [{
        nome:"Joao",
        idade: 13,
        turma: "A"
    },{
        nome:"Ana",
        idade: 13,
        turma: "D"
    },{
        nome:"Lucas",
        idade: 13,
        turma: "F"
}]

for(var l = 0; l < people.length; l++){
    console.log(`${people[l].nome} possui ${people[l].idade} anos`)
}

const prod = [{
    nome: "caneta", 
    preco: 1.50,
    marca: "bic"},
    {
    nome: "caneta", 
    preco: 1.50,
    marca: "bic"
    
}]

// DADO PRIMITIVO (string; number; boolean; null; undefined, symbol) nao pode ser representado por objeto

function alteraArray(a){
    a.push("adicionado")
}

let arrP = ["a"]
console.log(arrP)
alteraArray(arrP)
console.log(arrP)

function arteraPrimitivo (p){
    p += " adicionado"
    console.log(" dentro da function " + p)
}
let msg = " mensagem"
console.log(msg)
arteraPrimitivo(msg)
console.log(msg)

//ARRAY com numeros randomicos(random; aleatorio)

//Math.random cria numeros randomicos

function generateRandomInteger(){
    return parseInt(Math.random() * 50)
}

let arrST = []
while(arrST.length <= 20){
    let randomNumber = generateRandomInteger(30)

    if (arrST.indexOf(randomNumber) < 0){
        arrST.push(randomNumber)
    }
    
}

console.log(arrST)





















