/*
function minhaFunc() {
    corpo da function
}
*/

function minhaFunc() {
  console.log("teste");
}

minhaFunc();

const teste = function minhaFunc() {
  console.log("teste01");
};

teste();

/* 
function teste(){
    if (true){
        var x = 10
    }
    console.log(x) // 10
}
console.log(x) // ERRO
*/

/* 
function teste(){
    if (true){
        let x = 10
    }
    console.log(x) // ERRO
}
console.log(x) // ERRO
*/

//function(){}() -> ERRO

// -> FUNCAO AUTO-EXECUTAVEL

/*
(function(n1, n2, n3){
        let isValid = false
        console.log(" Primeiro ", isValid, n1, n2, n3)

        function outraFunction() {
            console.log(" Segundo ")
        }
        outraFunction()
}) (1, 2, 3)
*/

function somar(n1, n2) {
  return n1 + n2;
}

console.log(somar(1, 2));

function somarPri(n1) {
  return n1;
}

console.log(somarPri([1, 2, 3]));

function somarSec(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(somarSec([1, 2, 3, 4]));

function somarTerc() {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(somarTerc(1, 2, 3, 4, 5, 6, 7, 8, 9));

let name = "Mateus";

function contaNome() {
  return console.log(`O nome possui ${name.length} letras`);
}
contaNome();

// -> FUNCTION CALL BACK

function fn(cb) {
  console.log("Executar ação callBack");
  console.log(typeof cb);
  typeof cb === "function" && cb();
}

function callBack() {
  console.log("Função passada por parâmetro");
}

fn(callBack);

function fn2(n1) {
  return function (n2) {
    return n1 * n2;
  };
}

const funcao02 = fn2(10);
const mult = funcao02(2);

console.log(mult);

function fn03() {
  fn03.count++;
  return function _fn03() {
    console.log("Função retornada por parâmetro");
  };
}

fn03.count = 0;

const funcao03a = fn03();
const funcao03b = fn03();
const funcao03c = fn03();

console.log(fn03.count);
