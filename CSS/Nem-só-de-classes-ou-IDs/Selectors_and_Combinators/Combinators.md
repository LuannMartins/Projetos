# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendant combinator 

* Idenficado por espaço entre os seletores.
* Busca um elemento dentro de outro

```css
body article h2
```

## Child combinator

* Idenficado pelo sinal ` > ` entre dois seletores
* Seleciona somente o elemento que é filho direto do pai
* Elementos depois do filho direto serão descosiderados

# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

Descendant combinator

Identificado por um espaço entre os seletores
Busca um elemento dentro de outro, mesmo que existam outros elementos no caminho
HTML

<body>
	<article>
		<h2>Um Título</h2>
	</article>
</body>
CSS

body article h2 {
	color: red;
}