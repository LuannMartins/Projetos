// manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim // push significar empurar
techs.push("nodejs")
// adicionado no começo // unshift significar deslocar
techs.unshift("sql")
// remover do fim // pop significar estourar
techs.pop()
// remover do começo // shift significar mudança
techs.shift()
// pegar somente alguns elementos do array // slice significar corta
console.log(techs.slice(1,3))
// remover 1 ou mais items em qualquer posição do array // splice significar emendar
techs.splice(1,2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)