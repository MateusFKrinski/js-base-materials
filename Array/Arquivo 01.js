let arr = ["um", "dois", 5, 3, true, "quatro", 5, 25];

console.log(arr.indexOf("dois"));

console.log(arr.lastIndexOf(5));

console.log(arr.includes("dois"));

console.log(
  arr.find(function (el) {
    return el > 10;
  })
);

console.log(
  arr.findIndex(function (el) {
    return el > 12;
  })
);

//let arr2 = [4, 5, 6]
//let arr1 = [1, 2, 3]

//console.log(arr1.toString())

//console.log(arr1.join(' - '))

//let arr3 = arr1.concat(arr2)

//console.log(arr1)

//console.log(arr2)

//console.log(arr3)

//let arrT = [1, 2, 3]
//let arrT1 = arrT

//arrT1 [arrT.length] = 'novo valor'

//console.log(arrT)

//console.log(arrT1)

//let arrT2 = [1, 2, 3]
//let arrT3 = [].concat(arrT2)
//arrT3 [arrT.length] = 'novo valor'

//console.log(arrT2)

//console.log(arrT3)

const nomes = ["João", "Daniel", "Julio", "Eduardo"];

let nomesPorOder = nomes.reduce(function (nomes, nomeAtual) {
  let primeiraLetraNome = nomeAtual[0];

  if (nomes[primeiraLetraNome]) {
    nomes[primeiraLetraNome]++;
  } else {
    nomes[primeiraLetraNome] = 1;
  }

  return nomes;
}, {});

console.log(nomesPorOder);

const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9];

const numerosUnicos = numeros.reduce(function (numerosUnicos, numeroAtual) {
  if (numerosUnicos.indexOf(numeroAtual) < 0) {
    numerosUnicos.push(numeroAtual);
  }
  return numerosUnicos;
}, []);

console.log(numerosUnicos);
