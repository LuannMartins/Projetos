# Trabalhando com fontes

Tipografia transmite mensagem

    - negrito
    - tamanho
    - estilo

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

## Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade 
* Inclui *fallback* font // fallback é usado como escape caso algo não de certo usar fallback ou seja caso o "Times New Roman" não der certo tem fallback que é Times ou seja a outra opção ou seja o escape.

```css
p {
    font-family: "Times New Roman", Times, serif;
}
```
    - serif // é font que tem dobras na letras
    - sans // é font reta e justa

## Font Weight

* Peso da fonte

````css
p {
    font-weight: bold;
}
```

## Font Style

* O Estilo da Fonte

````css
span {
    font-style: italic;
}
```

## Font Size

* O tamanho da fonte

```css
p {
    font-size: 18px;
}
```

## Web Fonts

- fontes do sistema x fontes da web
- como usar fontes para web ?

    * @font-face
    * @import
    * link

### Referências

https://www.w3.org/TR/css-fonts-3/
https://css-tricks.com/snippets/css/using-font-face/