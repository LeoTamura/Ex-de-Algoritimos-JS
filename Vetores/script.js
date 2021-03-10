/////     VETORES


// let num = 0
// let qnt = 0

// for (let i = 0; i < 3; i++) {
//     let num = parseInt(prompt("Digite um numero"))
//     if (num > 8) {
//         qnt = qnt + 1
//     }
// }
// console.log("A quantidade de numeros maiores que 8 = "+ qnt)


// let x = [10,5,6,7,9]

// console.log(x[4])

// let x = ["banana","maça", "limao", "uva", "tamarindo"]

// x.push("kiwi")
// x[0] = "laranja"

// console.log(x[4])




// let notas = [];

// for(let i=0; i<3; i++){
//     let input = prompt("Digite uma nota")
//     notas[i] = input
// }

// for(let i=0; i<notas.length; i++){
//     console.log(notas[i])
// }


// let notas = [4, 5, 6, 8, 20, 15];
// console.log(notas.indexOf(20))





// let pNum = []

// for(let i=0; i<5; i++){
//     let num = parseInt(prompt("digite um numero"))
//     if(num != 0){
//         if(num%2 == 0){
//             pNum.push(num)
//         }
//     }
//     else{
//         i--
//         console.log("Impossivel divisao por 0")
//     }
// }

// if(pNum.length>=1){
//     console.log("Os numeros pares sao:")
//     for(let i=0;i<pNum.length; i++){
//         console.log(pNum[i])
//     }
// }
// else{
//     console.log("nenhum numero par")
// }



// ex. 1

// let soma = 0
// let list = []

// for(let i=0; i<5; i++){
//     let input = parseInt(prompt ("Digite um numero"))
//     list[i] = input
//     soma = soma + input
    
// }
// console.log("A soma dos numeros = "+ soma)

// console.log("Os numeros digitados foram: ")
// for(let i=0; i<list.length; i++){
//     console.log((list[i]))

// }


// ex. 2

// let list = [];

// for(let i=0; i<5; i++){
//     let input = prompt("Digite um nome")
//     list[i] = input
// }

// console.log("A lista de nomes digitados e:")
// for(let i=0; i<list.length; i++){
//     console.log(list[i])
// }

// console.log("A lista inversa e:")
// for(let i=list.length-1; i>=0; i--){
//     console.log(list[i])
// }


// ex.3

// let list = [];
// let list2 =[]

// for(let i=0; i<5; i++){
//     let input = prompt("Digite um numero")
//     list[i] = input
//     list2[i] = list[i]*5
// }

// console.log("Os valores sao:")
// for(let i=0; i<list.length; i++){
//     console.log((list[i])+ "      "+ (list2[i]))
// }


// ex.4

// let par = [];
// let impar =[]

// for(let i=0; i<5; i++){
//     let num = parseInt(prompt("Digite um numero"))

//     if(num%2 == 0){
//         par.push(num)
//     }
//     else {
//         impar.push(num)
//     }
// }

// console.log("Os pares sao:")
// for(let i=0; i<par.length; i++){
//     console.log(par[i])
// }

// console.log("Os impares sao:")
// for(let i=0; i<impar.length; i++){
//     console.log(impar[i])
// }


// ex. 5


// let par = [];
// let impar =[]

// for(let i=0; i<5; i++){
//     let num = parseInt(prompt("Digite um numero"))

//     // while(num == 0) {
//     //     console.log("0 e invalido. Digite outro numero")
//     //     num = parseInt(prompt("Digite um numero"))
//     // }
//     if(num==0){
//         console.log("0 e invalido. Digite outro numero")
//         i--
//     }
//     else{
//         if(num%2 == 0){
//             par.push(num)
//         }
//         else {
//             impar.push(num)
//         }
//     }

//     // if(num%2 == 0){
//     //     par.push(num)
//     // }
//     // else {
//     //     impar.push(num)
//     // }
// }

// console.log("Os pares sao:")
// for(let i=0; i<par.length; i++){
//     console.log(par[i])
// }

// console.log("Os impares sao:")
// for(let i=0; i<impar.length; i++){
//     console.log(impar[i])
// }


// ex. 6

// let list = [];

// for(let i=0; i<10; i++){
//     let input = prompt("Digite um numero")
//     list[i] = input
//     // list.sort();
//     list.sort(function(a, b){
//         return a-b
//     })
// }

// console.log("Os numeros em ordem crescente sao:")
// for(let i=0; i<list.length; i++){
//     console.log(list[i])
// }


// let a = [ 0,5,20,34,37]
// let b = [ 1,2,19,39,40]
// let c = [];

// for (i = 0; i < a.length; i++) {
//     c.push(a[i]);
// }

// for (j = 0; j < b.length; j++) {
//     c.push(b[j]);
//     c.sort(function(a, b){
//         return a-b
//     })
// }

// console.log ("A = "+ a)
// console.log ("B = "+ b)
// console.log ("C = "+ c)


//ou


// let a = [ -3,5,20,34,37]
// let b = [ 1,2,19,39,40,41,45,50,90]
// let c = [];

// //soma da qtd de pos dos dois vetores
// let totalPos = a.length+b.length

// console.log(a.length+b.length);

// //Definindo um marcador,flag, sinalizador que marca posiçao do menor numero de cada vetor que ainda não foi adicionado
// let posA = 0
// let posB = 0

// //Fazer todas comparaçoes necessarias, no caso a soma do tamanho dos dois vetores que contem todos os numeros a serem analisados
// for (i = 0; i < totalPos; i++) {

// //Verifico quem é menor a partir pos 0 da cada um
// //Nesse primeiro IF verifico se A é maior que B
//     if (a[posA]>b[posB]) {

//         //caso A seja maior que B, adiciono o B no vetor pois eleé menor e em ordem crescente ele vem primero
//         c.push(b[posB])
        
//         //Verifico se a posB ainda esta dentro do tamanho do vetor B
//         //pra num incrementar alem da quantidade pos posicoes existentes em B
//         if (posB<b.length-1) {
//             //caso esteja dentro incrementa a posDoMenorValordoB
//             posB++
//         }
//         //caso a posB ja esteja a ultima no caso b[4]
//         //completar o vetor c com restante do vetor a
//         else{
//             //esse vai começa do posA, pra ignorar os numero que ja foram
//             //incrementa de um em um até finalizar o numeros do vetor
//             for(let j = posA; j< a.length; j++){
//                 c.push(a[j])
//             }
//             //forço o fim do for principal pois caso chegou no limite de A ou de B
//             //não é mais necessario continuar a verificaçao
//             //todos os outros ja foram preenchidos
//             i=totalPos;
//         }
//     }

//     //Caso o A[posDoMenorNumAindaNaoUtilizado] seja maior que o B adiciono o B[''] no C
//     else{
//         c.push(a[posA])
//         //
//         if (posA<a.length-1) {
//             posA++
//         }
//         //
//         else{
//             for(let j = posB; j< b.length; j++){
//                 c.push(b[j])
//             }
//             i=totalPos;
//         }
//     }

// }

// console.log(c)
