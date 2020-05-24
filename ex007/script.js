/*
Criei uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
<input type="text" name="user">
<button onclick="">Adicionar</button>
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>
A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
<li>Carregando...</li>
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.
*/

var nomes = [ "Repo1","Repo2","Repo3","Repo4","Repo5"];


//Função de clicar no botão Pesquisar
function search(){
    var name = document.querySelector('input')
    let ul = document.querySelector('ul')
    let li = document.createElement('li')
    ul.appendChild(li)
    console.log(name.value)
    console.log(ul)
    //li.innerText = "Hello World"
    //1- Tempo de espera deve aparecer o "carregando...'
    
    window.setInterval(alert('carregando...'),5000)

    //2- Sentença de SE ou Promise, caso se existir: continuar, se não mostrar que o usuário não existe.
    
    axios.get(` https://api.github.com/users/${name.value}/repos`)


    .then(function(response){
        console.log(response)
        for(nome of nomes){
            let li = document.createElement('li')
            var litext = document.createTextNode(nome)
            ul.appendChild(li)
            li.appendChild(litext)

             
        }
    })
    .catch(function(error){
        console.warn(error)
        li.innerText= "Usuário não encontrado..."
    })
    
    name.value = ''
    


    }
