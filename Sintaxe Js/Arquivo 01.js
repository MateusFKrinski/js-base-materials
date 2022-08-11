"use strict"

console.log("JavaScript funcionando")

var nome = "Mateus    "
console.log(2 + 2)

//comentário uma linha

/*
comentário
varias 
linhas
*/

//PALAVRAS RESERVADAS -> break case catch class const continue debugger default delete do else export extends finally for function if import in 
// instanceof new return super switch this throw try typeof var void while with yield

//enum await

//implements interface let package private protected public static

//abstract boolean byte char double final float goto

//int long native short synchroniz ed throws transient 

//volatile

//Ponto e virgula é preciso quando une duas funcoes em uma linha

var nome = "Lucas"; 
var x = 5

function fU(){
    var x = 10 
    console.log(x)
}

console.log(x)
fU()

/*
function soma(n1, n1){
    return n1 + n1
}
*/

// ->Isso irá gerar um erro

function soma(n1, n2){
    if (n1 == "" || n2 == ""){
        console.log("Não é possivel calcular ALGO QUE SEJA LETRA AMADO")
    } else{
        console.log(n1 + n2)
    }
}

/*
function teste(){
    console.log(this)
}*/

// -> o 'this' é dinâmico, variando com o que você está usando

