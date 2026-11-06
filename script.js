
// Navegação entre as telas
function mostrarTela(id, botao) {
    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");

    document.querySelectorAll("nav button").forEach(btn => {
        btn.classList.remove("active");
    });

    botao.classList.add("active");
}

// Assistente de IA simulado
function gerarSugestao() {
    const disciplina = document
        .getElementById("disciplina")
        .value.trim();

    const assunto = document
        .getElementById("assunto")
        .value.trim();

    const resultado = document.getElementById("resultado");

    if (!disciplina) {
        resultado.innerHTML =
            "⚠️ Informe uma disciplina para receber sugestões.";
        return;
    }

    const materia = disciplina.toLowerCase();

    let horario = "Quarta-feira às 14h";
    let monitor = "Monitor disponível da turma";

    if (materia.includes("matemática")) {
        horario = "Segunda-feira às 14h";
        monitor = "Gabriel - Monitor de Matemática";
    } else if (materia.includes("química")) {
        horario = "Quarta-feira às 15h";
        monitor = "Ana - Monitoria de Química";
    } else if (materia.includes("programação")) {
        horario = "Sexta-feira às 13h";
        monitor = "Lucas - Monitor de Programação";
    } else if (materia.includes("português")) {
        horario = "Terça-feira às 14h";
        monitor = "Mariana - Monitoria de Português";
    }

    resultado.innerHTML = `
        <h3>🤖 Assistente StudyConnect</h3>
        <p><strong>Disciplina:</strong> ${escapar(disciplina)}</p>
        <p><strong>Assunto:</strong> ${escapar(assunto || "Revisão geral")}</p>
        <p>📅 <strong>Horário sugerido:</strong> ${horario}</p>
        <p>👨‍🏫 <strong>Monitor sugerido:</strong> ${monitor}</p>
        <p>✅ Sugestão gerada com sucesso!</p>
    `;
}

// Proteção para exibir os dados digitados como texto
function escapar(texto) {
    return texto.replace(/[&<>"']/g, caractere => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[caractere]);
}