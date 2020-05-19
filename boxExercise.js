/*
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

*/

//Botão para criar quadrados.
var btnElement = document.querySelector("input") 
let divs = []; // Array é contabilizado pelo length



function criar(){


        var caixa = document.createElement('div');
        caixa.className = "caixa";
        document.body.appendChild(caixa)
       
        caixa.setAttribute('onmouseover', `changeColor(${divs.length})`);
        divs.push("."); //

        caixa.style.width= '100px';
        caixa.style.height= '100px';
        caixa.style.backgroundColor = '#f00';
        

        console.log(length);
        //return caixa;

}


btnElement.onclick = criar;

//mudar cor do quadrado ao passar o mouse
function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
       
        }
        return color;
       }
       var newColor = getRandomColor(); //
       
function changeColor(){
        console.log(length);
        let div = document.querySelectorAll("div")[length];
        let color = newColor;

        console.log(div);

        div.style.backgroundColor = getRandomColor();
      }
    
 

      


