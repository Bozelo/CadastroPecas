// pesoPeca  -  Camel Case
// peso_peca -  Snake Case
// PesoPeca  -  Pascal Case

let pesoPeca = 130
let quantidadePeca = 9
let nomePeca = 'Ca'

console.log("Peso Digitado:", pesoPeca)
if (pesoPeca > 100)  {
    
    console.log("Peso maior que 100g, pode cadastrar.")
    }else{
    console.log("Peso menor que 100g, não pode cadastrar!")

}
console.log("Quanditade Digitada:", quantidadePeca)
if (quantidadePeca < 10) {
    console.log("Ainda há espaço, pode cadastrar.")
} else {
    console.log("Sem espaço, não pode cadastrar!")
}

console.log("Nome Digitado:", nomePeca)
if (nomePeca.length < 3) {
    console.log("Nome precisa ter 3 ou mais caracteres!")
} else {
    console.log("Digitou um nome valido, pode cadastrar")
}

