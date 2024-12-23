function alterarNome(){
    let nome = document.getElementById("nome")
    let exibirNome = nome.value
     
    document.getElementById("mensagem").textContent = `Olá ${exibirNome}, que bacana te receber por aqui, esse site foi criado
     unicamente para te conhecer, seja bem vindo(a) ❤! `

    nome.value = ""
}
