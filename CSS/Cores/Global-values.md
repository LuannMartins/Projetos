# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipos

* background-color (para caixas)
* color (para textos)
* Border-color (para-caixas)
* outros...

# Valores

Podemos definir os valores por

* palavra-chave (blue, transparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla

```css
element {
    /* Keyword values */ // É palavra-chave
    color: currentcolor // Significa cor atual

    /* <named-color> values */
    color: red;
    color: orange;
    color: tan;
    color: rebeccapurple;

    /* <hex-color> values 0-f */
    color: #090; /* RED GREEN BLUE */
    color: #009900;// de 0 á 9 são cores diferentes
    color: #090a; // as letras define o nivel de transparência das cores 
    color: #009900aa;

    /* <rgb()> values */
    color: rgb(34,12,64,0.6); /* 0-255 */
    color: rgb(34, 12, 64, 0.6); // rgb é mesmo q red, green, blue; assim fica rgb.
    color: rgb(34 12 64, 0.6);
    color: rgb(34 12 64 / 0.3);
    color: rgb(34.0 12 64 / 60%);
    color: rgb(34.6 12 64 / 30%);

    /* <hsl()> values */
    color: hsl(30, 100%, 50%, 0.6); /* Hue - Saturation - Lumiance */
    color: hsla(30, 100%, 50%, 0.6);
    color: hsl(30, 100% 50% / 0.6);
    color: hsla(30, 100% 50% / 0.6);
    color: hsl(30.0 100% 50% / 60%);
    color: hsla(30.2 100% 50% / 60%);

    /* Global values */
    color: inherit;// inherit é uma herança ou seja ele ta herdado á cor do elemento anterior
    color: initial; //initial ele volta á cor inicial
    color: unset; //unset é tipo não estou definido cor para h1 ele vai pegar a cor do contexto q é está também.
}
```

## referência

https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
