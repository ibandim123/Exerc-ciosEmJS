//Exibir pares entre 32 e 321
//Os números pares, quando divididos por 2, deixam resto 0.
//Números impares, quando divididos por 2, o resto é igual a 1

var x = 32, y = 321; 

while(x<=321){
    x++
    if(x%2==0){
        console.log(x)
    }else{
        x+1
    }
}