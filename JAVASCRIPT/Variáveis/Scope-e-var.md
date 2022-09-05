# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block starement // significa uma declaração de bloco

````js
// vamos iniciar um bloco com uma chave
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`

## var
````js

// é global e, também local
// hoisting significa elevação

// var é global e poderá funcionar fora de um escopo de bloco

//<script>

console.log("> existe x antes do bloco? ", x)

{
    var x = 0
} 

console.log("> existe x depois do bloco? ", x)
```

//</script>


