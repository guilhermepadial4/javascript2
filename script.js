
function pedir(){
   var valor =  prompt("Qual sua opção: ")

switch (Number(valor)){
    case 1:
        alert("Você escolheu 1 = Suco")
        break
    case 2:
        alert("Você escolehu 2 = Água Gelada")
        break
    case 3:
        alert("Você escolheu 3 = Sorvete")
        break
    case 4:
        alert("Você chamou o garçom")
        break
    default:
        alert("Escolha uma opção de 1 a 4")
        break
}
}