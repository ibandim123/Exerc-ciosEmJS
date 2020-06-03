


/*
5º Exercício
Utilizando o operador de rest/spread (...) realize as seguintes operações:
A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
posição do vetor e outra variável y que recebe todo restante dos dados.
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
*/

const arr = [1, 2, 3, 4, 5, 6]

const [x,...y] = arr

console.log(x)
console.log(y)



//DONE!

const soma = arr.reduce(function(total,next){
    return total + next
});

console.log(soma)

const [z,f,...resto] = arr
console.log(z,f) 
//DONE!