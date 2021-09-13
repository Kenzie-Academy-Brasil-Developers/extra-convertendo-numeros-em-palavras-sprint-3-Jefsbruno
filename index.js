

function numberTowords() {

    number = []


    numberUnidades = [
        'um', 'dois', 'três', 'quatro',
        'cinco', 'seis', 'sete', 'oito', 'nove'
    ]

    numberEspeciais = [
        'onze', 'doze', 'treze', 'quatorze',
        'quinze', 'dezesseis', 'dezessete',
        'dezoito', 'dezenove'
    ]

    numberDezena = [
        'dez', 'vinte', 'trinta', 'quarenta',
        'cinquenta', 'sessenta', 'setenta',
        'oitenta', 'noventa'
    ]

    numberCentena = [
        'cem', 'cento', 'duzentos', 'trezentos', 'quatrocentos',
        'quinhentos', 'seiscentos', 'setecentos',
        'oitocentos', 'novecentos'
    ]

    numberMilhar = ['mil']



    for (let c = 0; c <= 9; c++) {
        for (let d = 0; d <= 9; d++) {
            for (let u = 0; u <= 9; u++) {
                if (c == 0) {
                    if (d < 1) {
                        if (u != 0) {
                            number.push(numberUnidades[u - 1])
                        }
                    }
                    else if (d < 2) {
                        if (d == 1 && u == 0) {
                            number.push(numberDezena[d - 1])

                        } else if (d == 1 && u > 0) {
                            number.push(numberEspeciais[u - 1])
                        }
                    } else if (d >= 2) {
                        if (u == 0) {
                            number.push(numberDezena[d - 1])
                        } else {
                            number.push(numberDezena[d - 1] + " e " + numberUnidades[u - 1])
                        }

                    }
                } else {
                    if (d == 0 && u == 0) {
                        if(c==1){
                            number.push(numberCentena[c-1])
                        }else if(c>1){
                            number.push(numberCentena[c])
                        }
                    } 
                    else if (d == 0 && u != 0) {
                        number.push(numberCentena[c] + ' e ' + numberUnidades[u - 1])
                    } 
                    else if (d < 2) {
                        if (d == 1 && u == 0) {
                            number.push(numberCentena[c]+ " e "+ numberDezena[d - 1])

                        } else if (d == 1 && u > 0) {
                            number.push(numberCentena[c]+ " e "+numberEspeciais[u - 1])
                        }
                    } 
                    else if (d >= 2) {
                        if (u == 0) {
                            number.push(numberCentena[c]+ " e "+numberDezena[d - 1])
                        } else {
                            number.push(numberCentena[c]+ " e "+numberDezena[d - 1] + " e " + numberUnidades[u - 1])
                        }

                    }


                }
            }
        }
    }
    number.push(numberMilhar[0])

    for(let n=0;n<number.length;n++){
        let resultado = document.querySelector('body')
        let paragrafo = document.createElement('p')
        paragrafo.innerText=number[n]
        resultado.appendChild(paragrafo)
    }
    return number
}
numberTowords()


