# justify-content

- Alinhameto dos elementos detro do container
- Distribição do elementos

## valores

- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly

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

    justify-content: space-around;

    border: 1px dashed black;
}


.box div{
    border: 1px solid;

}
```