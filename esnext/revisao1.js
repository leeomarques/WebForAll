//let e const
{
    var a = 2
    let b = 3
    console.log(b);
}
console.log(a);


//Template String

const produto = 'iPad'

console.log(`${produto} é caro!`);


//Destructuring

const [l, e, ...tras] = "Leonardo"
console.log(l, e, tras);

const [x, y] = [1, 2, 3]
console.log(x, y)

const {
    idade: i,
    nome
} = {
    nome: 'Leonardo',
    idade: 1
}
console.log(i, nome);