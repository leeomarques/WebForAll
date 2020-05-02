//Visivel dentro do modulo apenas
let a = 2;

//Visivel fora do modulo
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa Noite!'
    }
}