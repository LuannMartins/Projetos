## Selecionando elementos com pseudo-class

* :first-child
* :nth-of-type()
* :nth-child()

:first-child
É quando queremos selecionar o primeiro filho de um grupo de elementos.

HTML

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
CSS

ul li:first-child {
  font-weight: bold;
}