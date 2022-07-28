let arrayNumber = [3, 5, 6, 7, 8 ,2, 1]
let arrayString = ["azul", "vermelho", "laranja", "preto"]
let arrayVariados = [5, "praia", "casa", 6, true, false]

console.log(arrayNumber.length)
console.log(arrayString.length)
console.log(arrayVariados.lenth)

arrayNumber.splice(0,1)
console.log(arrayNumber)

arrayString.splice(1,1)
console.log(arrayString)

arrayVariados.splice(2,1)
console.log(arrayVariados)


console.log(arrayNumber.includes(8))
console.log(arrayVariados.includes("céu"))