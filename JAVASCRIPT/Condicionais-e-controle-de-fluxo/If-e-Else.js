// if...else

let temparature = 36.9
let highTemperature = temparature >= 37.5
let mediumTemparature = temparature < 37.5 && temparature >= 37

if(highTemperature) {
    console.log("Febre alta")
} else if(mediumTemparature) {
    console.log("Febre moderada")
} else {
    console.log("Saudável")
}