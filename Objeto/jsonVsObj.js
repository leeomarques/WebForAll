const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}

console.log(JSON.stringify(obj))
//console.log(JSON.parse("{A:1,B:2,C:3}")); //nao pegou
//console.log(JSON.parse("{'A':1,'B':2,'C':3}")); //nao pegou
console.log(JSON.parse('{"A": 1,"B": 2,"C": 3}')) //formato valido
console.log(JSON.parse('{ "Numeros": 1.7, "Strings":  \"string\" ,"Booleanos": true, "Objetos entre chaves": {}, "Arrays": [] }')); //formato valido


//https://jsonlint.com
//https://json5.org