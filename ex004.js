// função que dado um total de anos de estudo 
// retorna o quão experiente o usuário é:
// De 0-1 ano: iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master





   var anos = window.prompt('Quantos anos de Estudo você tem?')
    
    if(anos <= 1){
        window.alert('Você é iniciante')
    }else if(anos <= 3 ){
        window.alert('Você é intermediário')
    }else if(anos <=6){
        window.alert('Você é avançado')
    }else{
        window.alert('Você é o bichão doido')
    }
  

        
