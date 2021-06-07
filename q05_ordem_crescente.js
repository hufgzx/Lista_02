const prompt = require('prompt-sync')()

console.log('numeros em ordem', ordem)
function main(){
    const num1 = Number(prompt('num1: '))
    const num2 = Number(prompt('num2: '))
    const num3 = Number(prompt('num3: '))

    const maior = num3
    const intermediario = num2
    const menor = num1
    const ordem_crescente = maior > intermediario > menor

    console.log('valor do maior: ', maior)
    console.log('valor intermediario: ', intermediario)
    console.log('valor do menor: ', menor)
    console.log('valor em ordem crescente: ', ordem_crescente)

}
 function ordem(){
    if (num3 > num2 > num1)
     return ordem_crescente
 }
main()