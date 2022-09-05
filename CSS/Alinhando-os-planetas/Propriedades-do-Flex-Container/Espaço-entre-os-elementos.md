# gap

- Espaços entre os elementos

## valores

Unidades de medidas
fixas: px, pt
flexíveis: %, em, rem


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

    border: 1px dashed black;

    gap: 2px;
}


.box div{
    border: 1px solid;

}
```