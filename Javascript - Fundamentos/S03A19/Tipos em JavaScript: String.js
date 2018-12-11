const comunidade = "Shalom"

console.log(comunidade.charAt(4)) //Mostra onde está a letra a partir do parametro(numero)
console.log(comunidade.charAt(10)) //Pegando um determinado caracter na string 
console.log(comunidade.charCodeAt(5)) //Mostra Unicode - ASCI da string
console.log(comunidade.indexOf('Shalom')); //Mostra string através do Unicode - ASCI

console.log(comunidade.substring(2))
console.log(comunidade.substring(0, 2))

console.log('Comunidade Católica '.concat(comunidade).concat(" - Missão Recife")) // Concatenação
console.log('Comunidade Católica ' + comunidade + " - Missão Recife") // Concatenação
console.log(comunidade.replace('Shalom', 'SH'))

console.log('Leonardo, Developer, Web'.split(','))