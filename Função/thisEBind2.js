function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //1000milisegundos => 1 segundo
}


new Pessoa

//Alt+CTRL+N - Code Runner9