
// let lista = ['Guiherme', 'Rafael', 'Lorena']

// lista.map((item, index)=>{
//     console.log(`PASSANDO: ${item} - Está na posição: ${index}`)
// })

let numeros = [1, 2, 3]
let total = numeros.reduce((acumulador, numeros, indice, original,)=>{
    console.log(`${acumulador} - total até o momento`)
    console.log(`${numeros} - valor atual`)
    console.log(`${indice} - indice atual`)
    console.log(`${original} - array original`)

    return acumulador += numeros
})
