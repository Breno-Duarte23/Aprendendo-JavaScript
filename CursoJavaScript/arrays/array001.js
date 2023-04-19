const _arr = [1, 5, 10, "ola", true]

let sohNumeros = arr.some(function(el){
    
    return typeof el === "number" 
})

arr.filter(function(el, i, _arr){
    console.log(el)
    console.log(i)
    console.log(_arr)
})

console.log(sohNumeros)
