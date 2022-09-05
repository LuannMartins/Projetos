# flex-shrink

- O encolher do item dentro do container.

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

    height: 180px;
}


.box div{
    flex-basis: 80px;
    border: 1px solid;

}

.box div:nth-child(2),
.box div:nth-child(3){
    flex-shrin: 3;
}
```