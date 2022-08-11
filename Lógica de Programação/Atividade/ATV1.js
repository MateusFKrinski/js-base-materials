function mostrarTabuada(){
    var n = parseFloat(prompt("Digite um número!"))
    var msg = ""
    for(var j = 0; j <= 1000; j++){
        msg += `${n} x ${j} = ${n*j} <br>` 
    }
    output.innerHTML = msg
}

function apagarTabuada(){
    var msg = ""
    output.innerHTML = msg
}

//Pedir para o usuaria digitar um numero
//Toda info em string
//Tabuada de 1 a 1000

