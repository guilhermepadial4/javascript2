// let primeiros = [1, 2, 3]
// let numeros = [...primeiros, 4, 5, 6]

// console.log(numeros)

// let pessoa = {
//     nome: 'Guilherme',
//     idade: 19,
// }

// let situacao = {
//     ...pessoa,
//     status: 'Ativo',
//     cargo: 'Developer Javascript'
// }

// console.log(situacao)


function novoUsuario(info){
    console.log(info)
    let data = {
        ...info,
        status: "Ativo",
        admissao: "19/02/2023",
        codigo: "154756"
    }
    console.log(data)
}

novoUsuario({nome: "Guilherme", sobrenome: "Padial", cargo: "Desenvolvedor Javascript"})