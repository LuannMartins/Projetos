# Distâncias absolutas <length>

São fixas e não alterem seu valor.

Unidade     Nome                Equivalência
cm          Centímetros         1cm = 96px/2.54
in          Inches (polegadas)  1in = 2.54cm = 96px
px          Pixels              1px = 1/96th of 1in

* o mais  comum e mais utilizado é o **px**
* não recomendado usar cm

# Distâncias relativas

São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

* Beneficio: Maior adaptação ao diferentes tipos de tela 

Unidade     Relativo a
em          Tamanho da font do pai. // geralmente "em" multiplica ou seja sé tiver uma div com font-size 32px é tiver em com font-size 2px "em" muliplica 2px por 32px 
rem         Tamanho da font do elemento. // rem usar html { font-size = 12px } dessa forma definir uma font padrão 
vw          1% da viewport width. // width é a largura ou seja é 1% de 100% da tela "1vw" // viewport é o dispositivo visível
vh          1% da viewport heigth. // heigth é a altura ou seja é 1% de 100% da tela "1vh"