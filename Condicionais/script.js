////  CONDICIONAIS



// var nota = prompt("Digite sua nota")

// if (nota >= 6) {
//     console.log("Vc passou")
// }

// else if (nota < 6) {
//     console.log("Vc n passou")
// }

// else {
//     console.log("Invalido")
// }


// verificar se o numero é par ou impar

// var num = prompt("digite um numero")

// if (num % 2 == 0){
//     console.log(num+ " E par")
// }

// else {
//     console.log(num+ " O numero e impar")
// }



// verificar alistamento obrigatorio

// var sexo = prompt("digite F ou M")
// var idade = prompt("digite sua idade")

// if (sexo == "M" && idade >= 18) {
//     console.log('Alistamento obrigatório')
// }

// else {
//     console.log('Não se enquadra nos requisitos para o alistamento')
// }





// ex.1

// var num = prompt("Digite um numero")

// if (num % 10 == 0) {
//     console.log(num+ " E divisivel por 10")
// }

// if (num % 5 == 0) {
//     console.log(num+ " E divisivel por 5")
// }

// if (num % 2 == 0) {
//     console.log(num+ " E divisivel por 2")
// }

// else {
//     console.log(num+ " Nao e divisivel por 10, 5 ou 2")
// }



// ex.2

// var peso = parseFloat(prompt("Digite seu peso"))
// var altura = parseFloat(prompt("Digite sua altura"))
// var IMC = (peso/altura**2)

// if (IMC < 20) {
//     console.log("Seu IMC e: "+ IMC+"."+ " Vc esta abaixo do peso!")
// }

// else if ((IMC >= 20) && (IMC <= 25)) {
//     console.log("Seu IMC e: "+ IMC+"."+ " Vc esta no peso normal!")
// }

// else if ((IMC >= 25) && (IMC <= 30)) {
//     console.log("Seu IMC e: "+ IMC+"."+ " Vc esta em sobre peso!")
// }

// else if ((IMC >= 30) && (IMC <= 40)) {
//     console.log("Seu IMC e: "+ IMC+"."+ " Vc esta obeso!") 
// }

// else{
//     console.log("Seu IMC e: "+ IMC+"."+ " Vc esta obeso morbido!") 
// }


// ex.3

// var saldoMedio = prompt("Digite seu saldo medio")
// var credito
// // var credito1 = 0
// // var credito2 = (30/100)*saldoMedio
// // var credito3 = (40/100)*saldoMedio
// // var credito4 = (50/100)*saldoMedio

// if (saldoMedio <= 500) {
//     credito = 0
//     // console.log("Seu saldo medio e: "+ saldoMedio+"."+ " Vc possui "+ credito1+ " credito!")
// }

// else if (saldoMedio <= 1000) {
//     credito = (30/100)*saldoMedio
//     // console.log("Seu saldo medio e: "+ saldoMedio+"."+ " Vc possui "+ credito2+ " creditos!")
// }

// else if (saldoMedio <= 3000) {
//     credito = (40/100)*saldoMedio
//     // console.log("Seu saldo medio e: "+ saldoMedio+"."+ " Vc possui "+ credito3+ " creditos!")
// }

// else {
//     credito = (50/100)*saldoMedio
//     // console.log("Seu saldo medio e: "+ saldoMedio+"."+ " Vc possui "+ credito4+ " creditos!")
// }
// console.log("Seu saldo medio e: "+ saldoMedio+"."+ " Vc possui "+ credito+ " creditos!")


// ex.4

// var idade = prompt("Digite sua idade")

// if (idade < 16) {
//     console.log("Nao eleitor")
// }

// else if ((idade > 18) && (idade < 65)) {
//     console.log("Eleitor obrigatorio")
// }

// else if ((idade < 18) || (idade >= 65)) {
//     console.log("Eleitor facultativo")
// }

////ou

//// else {
////     console.log("Eleitor facultativo")
//// }


// ex.5

// var prato = prompt("Digite o numero do prato: 1-Vegetariano  2-Peixe  3-Frango  4-Carne")
// var sobremesa = prompt("Digite o numero da sobremesa: 1-abacaxi  2-Sorvete diet  3-Mouse diet  4-Mouse chocolate")
// var bebida = prompt("Digite o numero da bebida: 1-Cha  2-Suco de laranja  3-Suco de melao  4-Refrigerante diet")
// var calPrato = 0
// var calSobremesa = 0
// var calBebida = 0

// ////prato
// if (prato == 1) {
//     calPrato = calPrato + 180
// }
// else if (prato == 2) {
//     calPrato = calPrato + 230
// }
// else if (prato == 3) {
//     calPrato = calPrato + 250
// }
// else if (prato == 4) {
//     calPrato = calPrato + 350
// }
// ////sobremesa
// if (sobremesa == 1) {
//     calSobremesa = calSobremesa + 75
// }
// else if (sobremesa == 2) {
//     calSobremesa = calSobremesa + 110
// }
// else if (sobremesa == 3) {
//     calSobremesa = calSobremesa + 170
// }
// else if (sobremesa == 4) {
//     calSobremesa = calSobremesa + 200
// }
// ////bebida
// if (bebida == 1) {
//     calBebida = calBebida + 20
// }
// else if (bebida == 2) {
//     calBebida = calBebida + 70
// }
// else if (bebida == 3) {
//     calBebida = calBebida + 100
// }
// else if (bebida == 4) {
//     calBebida = calBebida + 65
// }

// var total = calPrato + calSobremesa + calBebida
// console.log("O total de calorias da sua refeicao e: "+ total)


// ex.6

// var num = prompt("Digite um numero entre 1 a 7") 

// if (num == 1) {
//     console.log("Domingo")
// }
// else if (num == 2) {
//     console.log("Segunda-feira")
// }
// else if (num == 3) {
//     console.log("Terça-feira")
// }
// else if (num == 4) {
//     console.log("Quarta-feira")
// }
// else if (num == 5) {
//     console.log("Quinta-feira")
// }
// else if (num == 6) {
//     console.log("Sexta-feira")
// }
// else if (num == 7) {
//     console.log("Sabado")
// }
// else{
//     console.log("Numero invalido") 
// }


// ex.7

// var num = prompt("Digite um numero")

// if (num % 2 == 0) {
//     console.log("Numero par") 
// }
// else {
//     console.log("Numero impar") 
// }


// ex.8

// var A = parseInt(prompt("Digite um valor"))
// var B = parseInt(prompt("Digite um valor"))
// var C = parseInt(prompt("Digite um valor"))

// if ((A > B) && (A > C)) {
//     console.log("Valor 1: "+ A)

//     if (B > C) {
//         console.log("Valor 2: "+ B)
//         console.log("Valor 3: "+ C)
          
//     } 
//     else {
//         console.log("Valor 2: "+ C)
//         console.log("Valor 3: "+ B)  
//     }
// }
// if ((B > A) && (B > C)) {
//     console.log("Valor 1: "+ B)

//     if (A > C) {
//         console.log("Valor 2: "+ A)
//         console.log("Valor 3: "+ C)
          
//     } 
//     else {
//         console.log("Valor 2: "+ C)
//         console.log("Valor 3: "+ A)  
//     }
// }
// if ((C > A) && (C > B)) {
//     console.log("Valor 1: "+ C)

//     if (A > B) {
//         console.log("Valor 2: "+ A)
//         console.log("Valor 3: "+ B)
          
//     } 
//     else {
//         console.log("Valor 2: "+ B)
//         console.log("Valor 3: "+ A)  
//     }
// }




////     SWITCH CASE


// var num = parseInt(prompt("Digite um numero entre 1 a 7"))


// switch(num){
//     case 1:
//         console.log("Domingo")
//         break;
//     case 2:
//         console.log("Segunda-feira")
//         break;
//     case 3:
//         console.log("terca-feira")
//         break;
//     case 4:
//         console.log("quarta-feira")
//         break;
//     case 5:
//         console.log("quinta-feira")
//         break;
//     case 6:
//         console.log("sexta-feira")
//         break;
//     case 7:
//         console.log("sabado")
//         break;
//     default:
//         console.log("[Erro]")
//         break;
// }