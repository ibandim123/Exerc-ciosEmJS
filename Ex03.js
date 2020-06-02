/*
Converta as funções nos seguintes trechos de código em Arrow Functions:
*/

// 3.1
const arr = [1, 2, 3, 4, 5];
const showMe = arr.map((item) => {
 return item + 10;
});
//console.log(showMe) // { [11, 12, 13, 14, 15} DONE!

// 3.2
// Dica: Utilize uma constante pra function

const usuario = [{ nome: 'Diego', idade: 23 }] 

//Vamos usar o find...
const find = usuario.find(item => console.log(item.idade)) 

//{23} DONE!

/*
// 3.3
// Dica: Utilize uma constante pra function
const usuario = [{nome: 'Diego',idade: 23}]
*/

const mostraUsuario = usuario.find(item => (console.log(item.nome, item.idade))) 

//{Diego 23} DONE!!

