/*
mensagem de valor existente quando clicar adicionar
msg de valor maior ou menor que 1 e 100 quando clicar adicionar (OK!!)
quando adicionar um valor o resultato tem que sumir
mensagem que não tem valor adicionado quando clicar adicionar e finalizar
-----------------------------------
resultados
total de números cadastrados
menor valor encontrado
maior valor encontrado
soma dos valores
media dos valores
*/

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.valeu, valores)) {
        
    } else {
    window.alert('[ERRO] Número já existe ou não é válido! Por favor, digite outro número.')
    }
}
    



/*
function calcular(s){
    
    
    if(num.value.length == 0){
        window.alert('[ERRO] Por favor digite um número!')
    }else if (num.value.length == num){
        window.alert('[ERRO] Número já existe! Por favor, digite outro número.')
    }else{
        let n = Number(num.valeu)
        let s = n
        let c = 1
        sel.innerHTML = ''
        while (s >= 1 && s <=100){
            return 'n'
        }
    }
}
*/
