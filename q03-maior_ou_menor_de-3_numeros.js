const prompt = require('prompt-sync')()

console.log('valor do numero é: ', valor_numero)
function main(){
    const num1 = Number(prompt('num1: '))
    const num2 = Number(prompt('num2: '))
    const num3 = Number(prompt('num3: '))

    const numero_maior = num2
    const numero_menor = num3
    const numero_intermediario = num1
    console.log('valor do numero maior: ', numero_maior)
    console.log('valor do numero menor: ', numero_menor)
    console.log('valor do numero intermediario: ', numero_intermediario)

}
function valor_numero(){
    if (num1 > num2)
    return false
} 
    if (num1 < num3){
        return false
    }
    if (num2 < num3){
        return false
    }
    if (num3 > num2){
        return false
    }
main()