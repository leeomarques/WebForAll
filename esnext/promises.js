function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('!!!'))
    .then(outraFrase => console.log(outraFrase)) //encadear usando o .then
    .catch(e => console.log(e)) //tratar erro