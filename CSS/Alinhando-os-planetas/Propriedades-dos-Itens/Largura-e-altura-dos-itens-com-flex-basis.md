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
    flex-basis: auto;
}

.box div:nth-child(1){
    width: 25px;
}
```
