<div class="page">
    <aside>Aside</aside>
    <main>
        Main
        <section>Content 1</section>
        <section>Content 2</section>
        <section>Content 3</section>
    </main>
</div>

*{
}    
.page {
    border: 2px solid;
    min-heigth: 100vh;

    display: flex;
}

aside {
    background: lightgreen;
    flex: 1;
}

aside {
    background: lightblue;
    flex: 2;
}

main section:nth-child(1) {
    background: lightgoldenrodyellow;
    flex: 0 0 100px;
}

main section:nth-child(2) {
    background: lightsalmon;
    flex: 2;
}

main section:nth-child(3) {
    background: lightpink;
    flex: 1;
}
