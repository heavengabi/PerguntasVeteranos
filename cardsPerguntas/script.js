function mostrarPergunta(tipo) {
    let pergunta = "";

    if (tipo === "soft") {
        pergunta = "Como você lida quando algum membro da sua equipe não gosta da sua ideia?";
    } else if (tipo === "hard") {
        pergunta = "Qual linguagem de programação você tem mais domínio?";
    }

   
    document.getElementById("pergunta").textContent = "❓ " + pergunta;

   
    const resposta = prompt(pergunta);

   
    if (resposta) {
        document.getElementById("resposta").textContent = "🗯️ Sua resposta: " + resposta;
    } else {
        document.getElementById("resposta").textContent = "Nenhuma resposta fornecida";
    }
}