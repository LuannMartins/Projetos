- Flex sizing
    - flexível
    - altera width/height do itens para preenchimento dos espaços do flex container

````html
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>
```

````css
.container {
    display: flex;
    border: 1px solid black
    height: 80vh;
}
.item {
    background-color: black
    border: 1px solid
    flex: 1;
}
```
