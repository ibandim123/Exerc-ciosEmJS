/*
Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
● Diego
● Gabriel
● Lucas
*/

var nomes = [ "Diego", "Gabriel", "Lucas"];
nomes.length
console.log(nomes);
  

function CreateElement(){


        for(var nome of nomes){ 
                
                var liElement = document.createElement('li');
                var liText = document.createTextNode(nome);
                liElement.appendChild(liText);     
                
                var place = document.querySelector('ul')
                place.appendChild(liElement)


                //console.log(liElement);
        }
        
}
 
 function adicionar(){

      
         var read = document.querySelector('input')
         
         nomes.push(read.value)//Adicionar Elemento ao vetor
         var liElement = document.createElement('li')
         var liText = document.createTextNode(read.value)
         liElement.appendChild(liText)
         var place = document.querySelector('ul')
         place.appendChild(liElement)
        
         function reset(){
                 read.value = ''
         }
         reset()

         console.log(nomes) 
         
 }
CreateElement()
