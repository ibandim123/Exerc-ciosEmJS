/*
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch
*/

var data =[];


        var tagElement = document.querySelector('div')
        var crtag = document.createElement('input')
        crtag.setAttribute('type:','number')

        tagElement.appendChild(crtag)

function clicar(){

        var idade = document.querySelector('input')
        console.log(idade.value)
       
        // Retornar uma promise
        function checaIdade(idade) {

                 return new Promise((resolve, reject) => {
                if(idade >= 18) {
                        resolve();
                } else {
                        reject();
                }
                });
        
               
        }
        
        // Executa a função
        checaIdade(parseInt(idade.value)).then(idade => {
                console.log("Maior que 18");
        }).catch((e) => {
                console.log("Menor que 18");
        });


        function reset(){
                document.querySelector('input')
                idade.value = ''
        }
        reset()

}   
                





        

