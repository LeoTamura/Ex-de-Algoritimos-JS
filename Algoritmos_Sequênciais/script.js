////   Algoritmos Seqüênciais e Condicionais


// ex. 1

// let x1 = 0
// let y1 = 0
// let x2 = 10
// let y2 = 10

// let dist = Math.sqrt(((x2-x1)**2 + ((y2-y1)**2)))

// console.log(dist)


// ex. 2

// let a = parseInt(prompt("Primeiro Num"));
// let b = parseInt(prompt("Segundo Num"));
// let c = parseInt(prompt("Terceiro Num"));

// let r = (a+b)**2
// let s = (b+c)**2
// let d = (r+s)/2

// console.log (d)


// ex. 3

// let anos = parseInt(prompt("Digite sua idade em anos"))
// let meses = parseInt(prompt("Digite sua idade em meses"))
// let dias = parseInt(prompt("Digite sua idade em dias"))

// let total = ((anos*365)+(meses*30)+dias)

// console.log("Sua idade expressa em dias = "+ total)


// ex. 4

// let idade = prompt("Digite sua idade em dias")

// let anos = (idade/365)
// let meses = (idade%365)/30
// let dias = (idade%365)%30

// console.log("Sua idade = "+ anos+ " anos "+ meses+ " meses "+ "e "+ dias+ " dias")


// ex. 5

// let n1 = parseInt(prompt("Digite a primeira nota"))
// let n2 = parseInt(prompt("Digite a segunda nota"))
// let n3 = parseInt(prompt("Digite a terceira nota"))

// let media = (((n1*2)+(n2*3)+(n3*5))/10)

// console.log("Sua media final = "+ media)


// ex. 6

// let duracao = prompt("Digite a duracao em segundos")

// let horas = (duracao/3600).toFixed(0)
// let minutos = ((duracao%3600)/60).toFixed(0)
// let segundos = ((duracao%3600)%60).toFixed(0)

// console.log("A duracao do evento foi de "+ horas+ " horas "+ minutos+ " minutos "+ "e "+ segundos+ " segundos")


// ex. 7

// let fabrica = parseInt(prompt("Digite o custo de fabrica"))
// let dist = 28/100
// let imp = 45/100
// let custoDist = fabrica*dist
// let custoImp = fabrica*imp

// custoConsum = fabrica+custoDist+custoImp

// console.log(custoConsum)


// ex. 8

// let a = parseInt(prompt("Digite o valor de a"))
// let b = parseInt(prompt("Digite o valor de b"))
// let c = parseInt(prompt("Digite o valor de c"))
// let d = parseInt(prompt("Digite o valor de d"))
// let e = parseInt(prompt("Digite o valor de e"))
// let f = parseInt(prompt("Digite o valor de f"))

// let x = ((c*e)-(b*f)/(a*e)-(b*d))
// let y = ((a*f)-(c*d)/(a*e)-(b*d))

// console.log("O valor de x = "+ x+ " e o valor de y = "+ y)


// ex. 9

// let i = 0
// let nota = 0
// let soma = 0


// while (i < 3) {
//     i = i + 1
//     let nota = parseInt(prompt("Digite um numero"))
//     soma = soma + nota
//     media = soma/3
// }
// console.log("A media de suas notas = "+ media)

// if (media >= 6) {
//     console.log("Voce foi aprovado")    
// }
// else {
//     console.log("Voce foi reprovado")
// }


// ex. 10

// let a = parseInt(prompt("Digite um numero"))
// let b = parseInt(prompt("Digite um numero"))
// let c = parseInt(prompt("Digite um numero"))

// if ((a>b) && (a>c)) {
//     console.log(a+ " eh o maior numero")    
// }

// else if((b>a) && (b>c)) {
//     console.log(b+ " eh o maior numero")    
// }

// else{
//     console.log(c+ " eh o maior numero")  
// }

// //// ou

// if (a>b) {
//     maior=a    
// }
// else{
//     maior=b
// }

// if (maior<c) {
//     maior = c
// }

// console.log("O maior numero foi: "+ maior)


// ex. 11

// let a = parseInt(prompt("Digite um valor para A"))
// let b = parseInt(prompt("Digite um valor para B"))

// if (a % b == 0) {
//     console.log(a+ " eh multiplo de "+ b)
// }

// else{
//     console.log(a+ " nao eh multiplo de "+ b) 
// }


// ex. 12

// let idade = parseInt(prompt("Digite sua idade"))

// if ((idade>=5) && (idade<=7)) {
//     console.log(idade+ " anos eh classificado para infantil A")
// }
// else if ((idade>=8) && (idade<=10)) {
//     console.log(idade+ " anos eh classificado para infantil B")
// }
// else if ((idade>=11) && (idade<=13)) {
//     console.log(idade+ " anos eh classificado para juvenil A")
// }
// else if ((idade>=14) && (idade<=17)) {
//     console.log(idade+ " anos eh classificado para juvenil B")
// }

// else if (idade>18) {
//     console.log(idade+ " anos eh classificado para adulto")
// }
// else{
//     console.log(idade+ " nao eh classificado")
// }


// ex. 13

// let a = parseInt(prompt("Digite um numero"))
// let b = parseInt(prompt("Digite um numero"))
// let c = parseInt(prompt("Digite um numero"))

// if (a>b) {
//     maior=a    
// }
// else{
//     maior=b
// }

// if (maior<c) {
//     maior = c
// }

// console.log("O maior numero foi: "+ maior)


// ex. 14


// let cod = parseInt(prompt("Digite seu codigo"))
// let nota1 = parseInt(prompt("Digite uma nota"))
// let nota2 = parseInt(prompt("Digite uma nota"))
// let nota3 = parseInt(prompt("Digite uma nota"))

// if (nota1>nota2) {
//     maior=nota1
//     media=(nota1*4+nota2*3+nota3*3)/10   
// }
// else{
//     maior=nota2
//     media=(nota2*4+nota1*3+nota3*3)/10 
// }

// if (maior<nota3) {
//     maior = nota3
//     media=(nota3*4+nota1*3+nota2*3)/10
// }

// console.log("Seu codigo eh "+cod)
// console.log("Suas 3 notas foram: "+ nota1, nota2, nota3)
// console.log("A media das notas eh: "+ media)

// if (media>=5) {
//     console.log("Voce foi aprovado")
// }

// else{
//     console.log("Voce foi reprovado")
// }


// ex. 15

// let num = parseInt(prompt("Digite um numero"))

// if (num%2 == 0) {
//     console.log(num+ " eh par")
// }
// else{ 
//     console.log(num+ " eh impar")
// }

// if (num>=0) {
//     console.log(num+ " tambem eh positivo")
// }
// else{
//     console.log(num+ " tambem eh negativo")
// }