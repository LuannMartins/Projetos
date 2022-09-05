## Utilizando combinatores

````css
ul > li [class="red"]
```

## Dica 

* Selectores muito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.

Utilizando combinadores
HTML

<ul>
  <li>Alooo</li>
  <li class="red">Hey</li>
</ul>
CSS

ul > li[class="red"] {
	color: red;
}
Dica:
Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização
Muitas vezes, um simples uso de classes, torna o trabalho mais eficiente