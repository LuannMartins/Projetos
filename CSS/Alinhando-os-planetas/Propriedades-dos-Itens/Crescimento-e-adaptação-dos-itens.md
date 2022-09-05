# flex-grow

- O crecimento do item dentro do container em relação aos espaços vazios.

````html
<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>
```

````css
.box {
    display: flex;
    flex-direction: column;

    border: 1px dashed black;

    height: 150px;
}


.box div{
    border: 1px solid;
}

.box div:nth-child(2),
.box div:nth-child(3){
    flex-grow: 1;
}

.box div:nth-child(1){
    flex-grow: 2;
}
```