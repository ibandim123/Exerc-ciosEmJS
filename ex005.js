/*
Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.
*/



//Botão para criar quadrados.
var btnElement = document.querySelector("input") //Selecionar a tag input e armazenar a variável chamada btnElement




function criar(){

   
    var caixa = document.createElement('div');
    caixa.className = "caixa";
    document.body.appendChild(caixa)

    window.addEventListener("div",criar)

document.querySelector('.caixa');

caixa.style.width= '100px';
caixa.style.height= '100px';
caixa.style.backgroundColor = '#f00';

    



  

}
btnElement.onclick = criar;// Criar evento "onclick" na variável elemento para a tag input, disparando a função criar()

