function sum(){
    const numbers = Array.from(arguments)
    console.log(numbers.reduce)
    return numbers.reduce(function(sum, atual){
        return sum + atual
    }, 0)
}
function avarege(){
    return sum(...arguments)/arguments.length
}

let soma = sum(1,2,3,4,5)
console.log(soma)
let media = avarege(1,2,3,4,5)
console.log(media)