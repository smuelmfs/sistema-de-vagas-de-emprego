// sistema de vagas de emprego

const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    //1. nome, (x candidatos)
    textoFinal += indice + ". "
    textoFinal += vaga.nomeVaga
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  }, "")
  alert(vagasEmTexto)
}

function novaVaga() {
  const nomeVaga = prompt('Qual nome da vaga?')
  const descricaoVaga = prompt('Qual a descrição da vaga?')
  const dataLimite = prompt('qual a data limite para se inscrever na vaga?')

  const confirmarVaga = confirm(`Salvar informações?
  Nome da vaga: ${nomeVaga}
  Descrição: ${descricaoVaga}
  Data Limite: ${dataLimite}`)

  if (confirmarVaga) {
    const novaVaga = {
      nomeVaga,
      descricaoVaga,
      dataLimite,
      candidatos: []
    }

    vagas.push(novaVaga)
    alert('Vaga criada')
  }
}

function exibirVaga() {
  const indice = prompt('Informe o índice da vaga')

  if (indice >= vagas.length || indice < 0) {
    alert('indice inválido')
  } else {
    const vaga = vagas[indice]
    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => {
      return textoFinal + candidato
    }, "")

    alert(`
  Vaga nº ${indice}
  Nome: ${vaga.nomeVaga}
  Descrição ${vaga.descricaoVaga}
  Data Limite: ${vaga.dataLimite}
  Quantidade de Candidatos: ${vaga.candidatos.length}
  Candidatos inscritos: ${candidatosEmTexto}`)
  }


}

function inscreverCandidato() {
  const nomeCandidato = prompt('Qual o nome do candidato?')
  const indice = prompt('informe o índice da vaga')
  const vaga = vagas[indice]

  const confirmarCandidato = confirm(`Salvar informações?
  Nome do candidato: ${nomeCandidato}
  Índice: ${indice}
  Nome da Vaga: ${vaga.nomeVaga}
  Descrição: ${vaga.descricaoVaga}
  Data limite: ${vaga.dataLimite}
  `)

  if (confirmarCandidato) {
    vaga.candidatos.push(nomeCandidato)
    alert('Inscrição realizada')
  }
}

function excluirVaga() {
  const indice = prompt('Informe o índice da vaga que deseja excluir')
  const vaga = vagas[indice]

  const confirmarExclusao = confirm(`Excluir vaga?
  Nome: ${vaga.nomeVaga}
  Descrição: ${vaga.descricaoVaga}
  Data limite: ${vaga.dataLimite}`)

  if (confirmarExclusao) {
    vagas.splice(indice, 1)
    alert('Vaga Excluída')
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
    "\n\nEscolha uma das opções" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um(a) candidato(a)" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair"
  )
  return opcao
}

function executar() {
  let opcao = ""
  do {
    opcao = exibirMenu()
    switch (opcao) {
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        exibirVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida.")
    }

  } while (opcao !== "6");
}

executar()

