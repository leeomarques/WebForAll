const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa()

const falar2 = pessoa.falar
falar2()

//Alt+CTRL+N - Code Runner

