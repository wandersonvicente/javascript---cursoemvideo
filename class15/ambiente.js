let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)

if (pos == -1){
    console.log(`O Valor não foi encontrada.`)
}else {
    console.log(`O valor 8 está na posição ${pos}`)
}


/*num[5] = 10
num.push(6)
num.length
num.sort()*/