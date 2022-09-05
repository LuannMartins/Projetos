// throw significa disparar

function sayMyName(name = "") {
    if (name === "") {
        throw "Nome é obrigatório"
    }

    console.log("depois do erro")
}

// try...catch:  try significa tentar, catch sgnifica pegar ou capiturar.
try {
    sayMyName("Mayk")
} catch(e) {
    console.log(e)
}

console.log("após ao try/catch")