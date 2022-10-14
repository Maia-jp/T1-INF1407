# T1-INF1407
# Programação para Web - T1
<aside>
<img src="https://www.notion.so/icons/groups_purple.svg" alt="https://www.notion.so/icons/groups_purple.svg" width="40px" /> Arthur Xavier
Joao Pedro Maia - 1920354

</aside>

<aside>
🐱 [https://github.com/arthurxvtv/T1-INF1407/tree/main](https://github.com/arthurxvtv/T1-INF1407/tree/main)

</aside>

# Game Design

### Proposta

Muitas pessoas olham para música clássica com um olhar muito genérico. Pensam que tudo é a mesma coisa, quando, na verdade, a música erudita é extremamente ampla. Buscando trazer um pouco desse conhecimento para o mundo atual criamos o nosso projeto. 
Esse jogo consiste basicamente em escutar uma música e tentar avinhar qual o compositor com base nas características fornecidas.

### Fluxo do jogo
![Untitled](https://github.com/arthurxvtv/T1-INF1407/blob/main/Programac%CC%A7a%CC%83o%20para%20Web%20-%20T1%2066445e6dc6d44f7d980ece4665f7f925/Untitled.png)

# Especificações

## Email

> Pedir a identificação do usuário no formato de email utilizado em Priplanus e somente permitir ao jogador jogar se o email for válido
> 

![login.html](https://github.com/arthurxvtv/T1-INF1407/blob/main/Programac%CC%A7a%CC%83o%20para%20Web%20-%20T1%2066445e6dc6d44f7d980ece4665f7f925/Untitled%201.png)

login.html

```jsx
let regex = /((b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|w|y|z)+\[((b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|w|y|z)+\|)+(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|w|y|z)+])/

onload = function(){
    this.document.getElementById("mailBTN").addEventListener("click", logar)
}

function logar() {
    var user = document.getElementById("mail").value
    
    if (!regex.test(user)){
        alert("Ohhh nao, seu email nao eh valido!")
    }else{
        window.open('./index.html')
    }
    
    console.log(user)
}
```

## Imagens

> Manipular no mínimo dois objetos do tipo imagem com duas imagens diferentes em cada objeto
> 

![Untitled](https://github.com/arthurxvtv/T1-INF1407/blob/main/Programac%CC%A7a%CC%83o%20para%20Web%20-%20T1%2066445e6dc6d44f7d980ece4665f7f925/Untitled%202.png)

Essas 3 imagens referentes aos compositores são manipuladas dentro do arquivo index.js com intuito de exibir dinamicamente os compositores.

```jsx
loadIn(doc,card){
        // Image
        let img = String("img"+card)
        doc.getElementById(img).src = this.imageSrc
        // Nome
        let nome = String("nome"+card)
        doc.getElementById(nome).innerHTML = this.nome
        // Era
        let era = String("periodo"+card)
        doc.getElementById(era).innerHTML = this.era
        // Description
        let desc = String("caracteristica"+card)
        doc.getElementById(desc).innerHTML = this.desc
    }
```

## Arrays

Durante o jogo manipulamos uma serie de arrays para armazenar os compositores existentes e exibidos na tela. Aqui temos um exemplo:

```jsx
//Array de compositores
let facil = [beethoven,mozart,vivaldi]
let medio = [paganini,bach,chopin]
let todos = [bach,beethoven,brahms,chopin,handel,liszt,mozart,paganini,rachmaninoff,tchailovski,vivaldi]
```

Um exemplo deles sendo manipulados para escolhermos 3 compositores diferentes

```jsx
function choose() {
    var a = Math.floor(Math.random() * todos.length);
    var b = Math.floor(Math.random() * todos.length);
    var c = Math.floor(Math.random() * todos.length);

    while(b == a){
        b = Math.floor(Math.random() * todos.length);
    }

    while(c == b || c == a){
        c = Math.floor(Math.random() * todos.length);
    }

    escolidos.push(todos[a])
    escolidos.push(todos[b])
    escolidos.push(todos[c])
    
  }
```

## Desvio Condicional

Durante o jogo existe uma série de desvios condicionais. Como por exemplo:

```jsx
if(usuarioEscolheu == correto){
        document.getElementById("resultaudoTitle").innerHTML = "Parabens !"
        document.getElementById("resultaudo").innerHTML = "Voce escolheu o compositor correto !"
    }else{
        document.getElementById("resultaudoTitle").innerHTML = "Ahhh não"
        var resultado = String("Voce escolheu o compositor errado. O correto era " + escolidos[correto].nome)
        document.getElementById("resultaudo").innerHTML = resultado
    }
```

## Seleção de configuração

Ao perder ou ganhar o jogo um modal se abre onde o usuário pode recomeçar escolhendo uma nova dificuldade

![modal dentro de index.html](https://github.com/arthurxvtv/T1-INF1407/blob/main/Programac%CC%A7a%CC%83o%20para%20Web%20-%20T1%2066445e6dc6d44f7d980ece4665f7f925/Untitled%203.png)

modal dentro de index.html

```jsx
function recomecarJogo(){
    var select = document.querySelector('#dificuldade');
    modo = -1
    for (var i = 0; i < select.options.length; i++) {
        modo +=1
        if(select.options[i].selected){
            break
        }
    }

    modal.style.display = "none";

    escolidos = []
    correto = -1
    usuarioEscolheu = -1
    carregarJogo()
}
```
