## display: block vs display: inline

- Como as caixas comportam em relação ás outras caixas caixas
- Comportamento externo das caixas

|   **block**                    |     **inline**                 |
|--------------------------------|--------------------------------|
|Ocupa toda a linha, colocando o | elemento ao lado ou outro      |
|próximo  elemento abaixo desse  |                                |
|--------------------------------|--------------------------------|
| width e height são respeitados | width e height não funcionam   |
|--------------------------------|--------------------------------|
|padding, margin, border irão    | somente valores horizontais de |
|funcionar normalmente.          | margin, padding e border       |
|--------------------------------|--------------------------------|

exemplos
block: `<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>`