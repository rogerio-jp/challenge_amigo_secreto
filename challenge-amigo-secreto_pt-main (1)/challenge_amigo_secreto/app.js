//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let inputSemNada = ''
let amigoSecreto = []
let numeroDeParticipantes= 0
let numerosJaSorteado = []




function texto(tag,texto){
let campo= document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function adicionarAmigo(){
let campo = document.querySelector('input').value
 if (amigoSecreto.includes(campo)|| campo == ''){
     alert('digite um nome valido por favor')
 }else{
    amigoSecreto.push(campo)
    numeroDeParticipantes++
    console.log(numeroDeParticipantes)
    console.log(amigoSecreto)
    limparNome()
    exibirAmigosNaTela ()

 }
}

    

function limparNome (){
    let campo = document.querySelector('input')
    campo.value = ''
}
function numeroAleatorio (){
    let campo= Math.floor(Math.random()*amigoSecreto.length)
return campo




}
let numeroSorteado
function sortearAmigo(){
do {numeroAleatorio()
    numeroSorteado = numeroAleatorio()
    

} while(numerosJaSorteado.includes(numeroSorteado))
    numerosJaSorteado.push(numeroSorteado)
    alert(`parabens, a pessoa sorteada foi ${amigoSecreto[numeroSorteado]}`)

}
function exibirAmigosNaTela (){
let campo = document.getElementById ('listaAmigos')
campo.innerHTML = ''
for(let i=0;  i < amigoSecreto.length;  i++){
    let item = document.createElement ('li')
    item.textContent = amigoSecreto[i]
    campo.appendChild(item)

}


}