# A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores

1. Origem do estilo
2. Especificidade
3. Importância 

## Origem do estilo

inline tem prioridade sobre > tag style tem prioridade sobre > tag link

### Especificidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal Universal selector, combinators e negation pseudo-class (:not()) // selector  Universal * asterisco é mesmo que 0 por ordem prioridade
1. Element type selector e pseudo-elements (::before, ::after) // Element type selector é 1 é mesmo h1 vai tar na frente 0 por ordem prioridade
10. Classes a attribute selectors ([type="radio"]) // Classes a attribute selectors é 10 que o mesmo title q uma classe vai tar na frente 1 por ordem prioridade
100.ID selector // ID é 100 que mesmo id #my-title é um id vai tar na frente 10 por ordem prioridade
1000. Inline // Inline é 1000 é mesmo Inline exemplo: <h1 style="color: blue"> vai tar na frente de todos por ordem prioridade
