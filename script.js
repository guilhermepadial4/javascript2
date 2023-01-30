
// let listagem = [5, 3, 'Guilherme', 2]
// let busca = listagem.find((item)=>{
//     if(item === 'Guilherme'){
//         console.log('Item encontrado')
//     }
// })

// console.log(busca)


let nomes = ['Jose', 'Lucimeire', 'Bianca', 'Guilherme', 'Rafael', 'Lorena']

let filtro = nomes.filter((item)=>{
    return item.length <= 6
})

console.log(filtro)
