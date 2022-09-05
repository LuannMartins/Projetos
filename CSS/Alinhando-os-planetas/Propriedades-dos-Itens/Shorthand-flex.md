# flex

- shorthand
- flex-grow flex-shrink flex-basis
- podem ter 1, 2 ou 3 valores

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
}


.box div{
    border: 1px solid;
    flex: 0 1 40px;
}

```