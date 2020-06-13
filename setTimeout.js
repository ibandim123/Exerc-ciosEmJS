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

async function receive(x){
    
    let a = await dobrarEm5Segundos(10)
 
    let b = await dobrarEm5Segundos(20)
    
    let c = await dobrarEm5Segundos(30)

    return x + a + b + c;
}

receive(10).then((sum) => {
console.log(sum);
});




