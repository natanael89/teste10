/* Dados do html */
const inputNome = document.getElementById("nomeDoAluno")
const selectDisciplina = document.getElementById("disciplina")
const inputNotaUm = document.getElementById("notaUm")
const inputNotaDois = document.getElementById("notaDois")
const inputNotaTreis = document.getElementById("notaTreis")
const inputNotaQuatro = document.getElementById("notaQuatro")
const resulBoletim = document.getElementById("resultadoBoletim")
const spanAluno = document.getElementById("aluno")
let boletim = []



/* Adicionar Dados */
function addDados() {
    
    const nome = inputNome.value
    const selectDis = selectDisciplina.value
    const nota1 = parseFloat(inputNotaUm.value)
    const nota2 = parseFloat(inputNotaDois.value)
    const nota3 = parseFloat(inputNotaTreis.value)
    const nota4 = parseFloat(inputNotaQuatro.value)

    const mediaGeral = (nota1 + nota2 + nota3 + nota4) / 4

    let situacao = ""

    if(mediaGeral >= 6){
        situacao = "Aprovado"
    } else if (mediaGeral <= 5.9) {
        situacao = "Reprovado"
    }
    
    if(nome && nota1 && nota2 && nota3 && nota4 !== null) {
        const dadosDoAluno = {
            aluno: nome,
            selectDis: selectDis, 
            nota1: nota1, 
            nota2: nota2,  
            nota3: nota3, 
            nota4: nota4,
            mediaGeral: mediaGeral,
            situacao: situacao
        }

        boletim.push(dadosDoAluno) 

    }else {
        alert("Porfavor preencha todos os campos abaixo")
    }
    
    limparBoletim()
}

/* Visualizar Dados */
function visualizar() {
   const dados = boletim.map(usuario => {
       return `<p>${usuario.aluno}</p>`
   })
   spanAluno.innerHTML = dados.join("") 
   const dadoBoletim = boletim.map((aluno)=>{
       return `
               
                <tr>
                   <td>${aluno.selectDis}</td>
                   <td>${aluno.nota1}</td>
                   <td>${aluno.nota2}</td>
                   <td>${aluno.nota3}</td>
                   <td>${aluno.nota4}</td>
                   <td>${aluno.mediaGeral}</td>
                   <td>${aluno.situacao}</td>
                </tr>
              `
              
    })
    
    resulBoletim.innerHTML = dadoBoletim.join("")

    addDados()
}

/* Limpar Dados */
function limparBoletim() {
    inputNome.value = ''
    inputNotaUm.value = ''
    inputNotaDois.value = ''
    inputNotaTreis.value = ''
    inputNotaQuatro.value = ''
}

/* Button Start */                    
consulta.addEventListener('click', visualizar)

