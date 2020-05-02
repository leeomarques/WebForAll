// tagged template - processar o template string dentro de uma função

function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra Sring'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`);