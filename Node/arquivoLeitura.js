const fs = require('fs')
                //diretorio atual o __dirname
const caminho = __dirname + '/arquivo.json'

//ler arquivos de forma sincrona...

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

//ler arquivos de forma assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);

})

const config = require('./arquivo.json')
console.log(config.db);

//ler uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
})