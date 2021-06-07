const prompt = require('prompt-sync')()

function main(){
    const numero_de_0_a_100 = Number(prompt('Número de 0 a 100: ')

    const numero_primo = (numero_de_0_a_100 / 1 || numero_de_0_a_100 / numero_de_0_a_100)

    if (numero_primo){
        console.log('É primo')
    }else{
        console.log('Não é primo')
    }

}
main()