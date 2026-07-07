// ===============================
// ALUNOS JÁ CADASTRADOS
// ===============================

let alunos = [

    {
        nome: "Ana Beatriz Souza",
        idade: 17,
        curso: "Desenvolvimento de Sistemas",
        turma: "DS1",
        telefone: "(21)99811-2233",
        email: "ana@senai.com",
        data: "2009-05-12"
    },

    {
        nome: "Carlos Henrique Lima",
        idade: 18,
        curso: "Mecânica",
        turma: "MEC1",
        telefone: "(21)99744-1122",
        email: "carlos@senai.com",
        data: "2008-02-18"
    },

    {
        nome: "Fernanda Oliveira",
        idade: 19,
        curso: "Logística",
        turma: "DS2",
        telefone: "(21)99622-8899",
        email: "fernanda@senai.com",
        data: "2007-09-30"
    },

    {
        nome: "Lucas Martins",
        idade: 18,
        curso: "Automação",
        turma: "DS3",
        telefone: "(21)99555-3344",
        email: "lucas@senai.com",
        data: "2008-01-15"
    },

    {
        nome: "Mariana Costa",
        idade: 17,
        curso: "Eletrotécnica",
        turma: "MEC2",
        telefone: "(21)99411-7766",
        email: "mariana@senai.com",
        data: "2009-11-04"
    }

];

// ===============================
// ELEMENTOS
// ===============================

const lista = document.getElementById("listaAlunos");
const pesquisa = document.getElementById("pesquisa");
const formulario = document.getElementById("formAluno");

// ===============================
// MOSTRAR ALUNOS
// ===============================

function mostrarAlunos(listaAlunos){

    lista.innerHTML = "";

    if(listaAlunos.length === 0){

        lista.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;">
                    Nenhum aluno encontrado.
                </td>
            </tr>
        `;

        return;
    }

    listaAlunos.forEach(aluno=>{

        lista.innerHTML += `

        <tr>

            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.turma}</td>
            <td>${aluno.telefone}</td>

        </tr>

        `;

    });

}

mostrarAlunos(alunos);

// ===============================
// CADASTRAR
// ===============================

formulario.addEventListener("submit",function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    const idade = document.getElementById("idade").value;

    const curso = document.getElementById("curso").value;

    const turma = document.getElementById("turma").value;

    const telefone = document.getElementById("telefone").value;

    const email = document.getElementById("email").value;

    const data = document.getElementById("data").value;

    if(

        nome === "" ||
        idade === "" ||
        telefone === "" ||
        email === "" ||
        data === ""

    ){

        alert("Preencha todos os campos.");

        return;

    }

    alunos.push({

        nome,
        idade,
        curso,
        turma,
        telefone,
        email,
        data

    });

    mostrarAlunos(alunos);

    formulario.reset();

    alert("Aluno cadastrado com sucesso!");

});

// ===============================
// PESQUISA
// ===============================

pesquisa.addEventListener("keyup",function(){

    const texto = pesquisa.value.toLowerCase();

    const resultado = alunos.filter(function(aluno){

        return (

            aluno.nome.toLowerCase().includes(texto) ||

            aluno.curso.toLowerCase().includes(texto) ||

            aluno.turma.toLowerCase().includes(texto)

        );

    });

    mostrarAlunos(resultado);

});

// ===============================
// ORDENAÇÃO ALFABÉTICA
// ===============================

alunos.sort(function(a,b){

    return a.nome.localeCompare(b.nome);

});

mostrarAlunos(alunos);

// ===============================
// MÁSCARA TELEFONE
// ===============================

const telefone = document.getElementById("telefone");

telefone.addEventListener("input",function(){

    let valor = telefone.value.replace(/\D/g,"");

    valor = valor.replace(/^(\d{2})(\d)/g,"($1)$2");

    valor = valor.replace(/(\d{5})(\d)/,"$1-$2");

    telefone.value = valor.substring(0,14);

});

// ===============================
// ENTER NA PESQUISA
// ===============================

pesquisa.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        e.preventDefault();

    }

});

// ===============================
// CONTADOR NO TÍTULO
// ===============================

function atualizarTitulo(){

    document.querySelector(".card h2").innerHTML =
    "Novo Aluno (" + alunos.length + " cadastrados)";

}

atualizarTitulo();

const cadastrarOriginal = formulario.onsubmit;

formulario.addEventListener("submit",function(){

    setTimeout(atualizarTitulo,100);

});
