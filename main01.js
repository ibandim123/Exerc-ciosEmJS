/*
A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):




*/

const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

/*
Utilizando o map
Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

*/
const showIdade = usuarios.map(function(item,idade){
  return item.idade
})

//console.log(showIdade);

/*
 Utilizando o filter
Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const filter = usuarios.filter(function(item,idade,empresa){
  return item.idade > 18 && item.empresa === "Rocketseat"  //Ela obrigatoriamente deve retornar true ou false
})
*/


//console.log(filter)

/*
2.3 Utilizando o find
Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

*/
const find = usuarios.find(function(item,empresa){
  return item.empresa === "Google"
})
//console.log(find)

/*
 Unindo operações
Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:



*/

const multiply = usuarios.map((item,idade) =>{
  return  item.idade * 2 
})
console.log(multiply)


//Usar spread para atualizar os novos dados feito pelo multiply
const usuarios2 = [{...usuarios[0],idade:45}, {...usuarios[1],idade:30},{...usuarios[2],idade:60}]

//usuarios[0].idade = 46; Outra forma de alterar os dados do objeto, sem ser por spread.


const filtro = usuarios2.filter((item,idade) =>{
 return item.idade <= 50
})

console.log(usuarios2)
console.log(filtro)

 