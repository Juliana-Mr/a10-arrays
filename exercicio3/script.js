let arrayNumber = [3, 5, 6, 7, 8 ,2, 1]
let arrayString = ["azul", "vermelho", "laranja", "preto"]
let arrayVariados = [5, "praia", "casa", 6, true, false]


let arrayNumberCopia = arrayNumber.slice()
let arrayStringCopia = arrayString.slice()
let arrayVariadosCopia = arrayVariados.slice()

arrayNumberCopia.push(9)
console.log("original", arrayNumber)
console.log("copia", arrayNumberCopia)

arrayStringCopia.pop()
console.log("original", arrayString)
console.log("copia", arrayStringCopia)

arrayVariadosCopia.splice(1,1)
console.log("original", arrayVariados)
console.log("copia", arrayVariadosCopia)