const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro! -- remove ultimo elemento de um array
console.log(pilotos);

pilotos.push('Verstappen'); //inclui um valor ao final de um array
console.log(pilotos);

pilotos.shift(); // -- remove primeiro elemento de um array
console.log(pilotos);

pilotos.unshift('Hamilton') //inclui um valor no array no inicio com indice 0
console.log(pilotos);

//splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //índice, quantidade de indice deletado, itens a serem adicionados
console.log(pilotos);

//Remover
pilotos.splice(3, 1) //índice, quantidade de indice deletado, itens a serem adicionados --Massa Saiu denovo ( kkk quebrou o carro denovo kkk)
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) //novo array a partir do indice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4) //novo array a partir do indice 2
console.log(algunsPilotos2);

