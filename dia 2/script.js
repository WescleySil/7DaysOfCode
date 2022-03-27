/*
Projeto de hoje
    Capturar valores de variáveis para usar depois
*/



function mostrarMensagem(){

    var nomeHtml = document.getElementById('nomeUsuario')
    var nascHtml = document.getElementById('nascUsuario')
    var lingHtml = document.getElementById('lingUsuario')
    var paragrafoHtml = document.getElementById('mensagem') 
    
    var nomeUsuario = nomeHtml.value
    var nascUsuario = nascHtml.value
    var lingUsuario = lingHtml.value
    var paragrafoNaTela = document.createTextNode(`Olá ${nomeUsuario}, você tem ${2022-nascUsuario} e já está aprendendo ${lingUsuario}!`)

    paragrafoHtml.innerHTML= ''
    paragrafoHtml.appendChild(paragrafoNaTela)/* Mostra a frase final */

    perguntaFinal()/* Desafio opcional // Chama a função que tem uma pergunta */
}

function perguntaFinal(){
    var lingHtml= document.getElementById('lingUsuario')
    var lingUsuario= lingHtml.value
    var perguntaHtml = document.getElementById('perguntaFinal')
    var perguntaNaTela = document.createTextNode(`Você gosta de estudar ${lingUsuario}? Digite 1 para SIM e 2 para NÃO`)
    var inputNaTela= document.getElementById('respostaFinal')
    var botaoEnviar= document.getElementById('botaoFinal')
    var mensagemFinal = document.getElementById('mensagemFinal')
    var respostaNumero= inputNaTela.value

    perguntaHtml.innerHTML= '' /* Faz com que toda vez que a função seja executada não repita o texto varias vezes */
    perguntaHtml.appendChild(perguntaNaTela) /* Faz com que a pergunta apareça na tela */
    inputNaTela.style.display= 'inline'/* Faz o input aparecer na tela  */
    botaoEnviar.style.display= 'inline'/* Faz o botão de envio aparecer */

    if(respostaNumero == 1){
        mensagemFinal.innerHTML= `Muito bom! Continue estudando e você terá muito sucesso.`
    }else if(respostaNumero == 2){
        mensagemFinal.innerHTML= `Ahh que pena... Já tentou aprender outras linguagens?`
    }else{
        mensagemFinal= `Digite apenas 1 ou 2`
    }
}
