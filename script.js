
// function convidados(...nomes){
//     console.log("SEJAM TODOS BEM-VINDOS")
//     console.log(nomes)
// }

// convidados("Guilherme", "Rafael", "Lorena")

function gerador(...numeros){
    console.log(numeros)

    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log("O numero gerado foi: " + numeros[numeroGerado])
}

gerador(1, 5, 86, 30, 22, 54, 9)
