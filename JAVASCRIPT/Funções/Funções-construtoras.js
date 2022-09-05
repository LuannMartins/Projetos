/* 
    Function() constructor

    * expressão new 
    * criar um novo objeto
    * this keyword
    
*/

//let date = new Date("2020-02-01")

//console.log(date)

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const luan = new Person("Mayk")
const joao = new Person("Joao")
console.log(luan.walk())
console.log(joao.walk())