# flex-flow

- shorthad
- flex-direction || flex-wrap


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
    /* display: flex; */
    flex-flow: colunm wrap;

    border: 1px dashed black;
}


.box div{
    border: 1px solid;

    /* width: 80px; */
}
```