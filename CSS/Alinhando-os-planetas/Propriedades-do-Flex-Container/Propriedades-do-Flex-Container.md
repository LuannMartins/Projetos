# Propriedades do Flex Container

* Direção dos itens
* Multi linhas
* alinhamento
    * principal
    * cruzando
* espaços entre os itens

````html
<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>
```

````css
.container {
    display: flex;
    flex-direction: column; ou flex-direction: row;
}
