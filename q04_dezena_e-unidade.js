const prompt = require('prompt-sync')()

function main(){
    const num1 = Number(prompt('valor do num1: '))

    const dezena = num1 * 10
    const resto = num1 % dezena
    const unidade = resto * 1

    console.log('valor da dezena', dezena)
    console.log('valor da unidade', unidade)

}
function valor(){
    if (dezena = unidade)
    return true
}
main()