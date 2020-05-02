console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Função para reverter uma palavra
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Leonardo Marques'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first());
console.log(['a', 'b', 'c'].first());

String.prototype.toString = function () {
    return 'Lascou tudo' // vai vir esse valor e não esse abaixo!!!
}
console.log('Leonardo'.reverse())

