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
    color: rgb
}