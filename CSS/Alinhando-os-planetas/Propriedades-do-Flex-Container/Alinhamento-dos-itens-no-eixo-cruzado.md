# align-items

- Alinhamento dos elementos no eixo cruzado

## valores

- stretch
- flex-start
- flex-end
- center

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

    align-items: center;

    border: 1px dashed black;

    height: 150px;
}


.box div{
    border: 1px solid;

}
```