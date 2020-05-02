// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)); //saber se a variavel vem privatizada

produto.nome = 'Borracha'
produto.descricao = 'Borracha Branca'
delete produto.tag
console.log(produto);

//Object.seal

const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
//nao consegue mais mecher apos esta sendo selado
console.log('Selado', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);

//Object.freeze = selado + valores constantes

