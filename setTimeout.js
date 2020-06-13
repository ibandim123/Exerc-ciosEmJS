/*
Crie uma função que após 5 segundos, dobre o resultado do número passado como parâmetro. 
Essa função deverá retornar uma promise. Use o setTimeOut como temporizador.
*/

function dobrarEm5Segundos(x) {
    return new Promise(resolve => { 
      setTimeout((dobrarEm5Segundos) =>{
          resolve(x*2)
      },5000)
      
    });
        
  }
console.log(dobrarEm5Segundos(5))



