//// FUNÇÕES



// ex. 1


// let r = parseFloat(prompt("Digite o raio da esfera para calcular seu volume"))
// resultado = volEsfera(r)
// console.log(resultado)


// function volEsfera(raio) {
//     volume = (4/3)*3.14*(raio*raio*raio)

//     return volume
// }


// ex. 2


// let escolha
// pedeUsuario()

// while(escolha == "a" || escolha == "p"){
//     let x = parseInt(prompt("Digite a primeira nota"));
//     let y = parseInt(prompt("Digite a segunda nota"));
//     let z = parseInt(prompt("Digite a terceira nota"));

//     if(escolha == "a"){
//         resultado = mediaAritmetica(x,y,z)
//         console.log(resultado)
//     }

//     if(escolha == "p"){
//         resultado = mediaPonderada(x,y,z)
//         console.log(resultado)

//         break;
//     }

//     pedeUsuario()
// }

// function pedeUsuario(){
//     escolha = prompt("Digite: A - para media aritmetica ou P - para media ponderada ou 0 - para sair").toLowerCase()  
// }

// function mediaAritmetica(nota1, nota2, nota3) {
//     mA = (nota1+nota2+nota3)/3

//     return mA
// }


// function mediaPonderada(nota1, nota2, nota3) {
//     mP = ((nota1*5)+(nota2*3)+(nota3*2))/10

//     return mP
// }


// ex. 3

// function ehPrimo (numero){

//     p = true

//     for(i=2;i<numero;i++){
//         if(numero%i==0){
//             p = false
//         }
//     }
//     return p
// }

// let input = parseInt(prompt("Digite um numero"))

// if(ehPrimo(input)){
//     console.log(input+ " eh numero primo")
// }

// else{
//     console.log(input+ " nao eh numero primo") 
// }


// ex. 5

// let input = prompt("Digite a duracao em segundos")

// console.log(calcSegundos(input))


// function calcSegundos(duracao){

//     horas = (duracao/3600).toFixed(0)
//     minutos = ((duracao%3600)/60).toFixed(0)
//     segundos = ((duracao%3600)%60).toFixed(0)

//     return (horas+ " horas "+ minutos+ " minutos "+ segundos+ " segundos")
// }


// ex. 6


// let ano = parseInt(prompt("Digite sua idade em anos"));
// let mes = parseInt(prompt("Digite os meses"));
// let dia = parseInt(prompt("Digite os dias"));

// resultado = lerIdade(ano, mes, dia)
// console.log("Sua idade em dias = "+ resultado)


// function lerIdade(anos, meses, dias) {
//     totalA = anos*365
//     totalM = meses*30
//     idade = totalA+totalM+dias

//     return idade
// }


// ex.8

// let input = parseInt(prompt("Digite uma idade"))

// categoria(input);


// function categoria(idade) {

//     if ((idade>=5) && (idade<=7)) {
//         console.log(idade+ " anos eh classificado para infantil A")
//     }
//     else if ((idade>=8) && (idade<=10)) {
//         console.log(idade+ " anos eh classificado para infantil B")
//     }
//     else if ((idade>=11) && (idade<=13)) {
//         console.log(idade+ " anos eh classificado para juvenil A")
//     }
//     else if ((idade>=14) && (idade<=17)) {
//         console.log(idade+ " anos eh classificado para juvenil B")
//     }
    
//     else if (idade>18) {
//         console.log(idade+ " anos eh classificado para adulto")
//     }
//     else{
//         console.log(idade+ " nao eh classificado")
//     }
    
// }


// ex. 9

// let input = parseInt(prompt("Digite um numero"))
// ehPositivo(input)

// function ehPositivo(numero) {
//     if (numero>=0) {
//         console.log(numero+ " eh positivo")
//         return true
//     }
    
//     console.log(numero+ " eh negativo")
//     return false
  
// }


// ex. 10

// let input = parseFloat(prompt("Digite um numero"))
// verificador(input)

// function verificador(numero) {

//     if (numero % 2 == 0){
//         console.log(numero+ " = par")
//         return true
//     }
    
//     console.log(numero+ " = impar")
//     return false

// }


// ex. 11

// let input = prompt("Digite uma media")
// mostraConceito()
// // console.log(input+ " = conceituado "+ conceito(input))

// function conceito(media) {

//     let conceito 

//     if ((media>=0) && (media<=4.9)) {
//         conceito = "D"
//     }
//     else if ((media>=5) && (media<=6.9)) {
//         conceito = "C"
//     }
//     else if ((media>=7) && (media<=8.9)) {
//         conceito = "B"
//     }
//     else if ((media>=9) && (media<=10)) {
//         conceito = "A"
//     }
//     else{
//         conceito = "nao eh conceituado"
//     }

//     return conceito
// }

// function mostraConceito() {

//     console.log(input+ " = conceituado "+ conceito(input))

//     // if ((media>=0) && (media<=4.9)) {
//     //     console.log(media+ " = conceituado D")
//     // }
//     // else if ((media>=5) && (media<=6.9)) {
//     //     console.log(media+ " = conceituado C")
//     // }
//     // else if ((media>=7) && (media<=8.9)) {
//     //     console.log(media+ " = conceituado B")
//     // }
//     // else if ((media>=9) && (media<=10)) {
//     //     console.log(media+ " = conceituado A")
//     // }
//     // else{
//     //     console.log(media+ " nao eh conceituado")
//     // }
    
// }


// ex. 12


// let alt = prompt("Digite sua altura")
// let sex = prompt("Digite: M - masculino ou F - feminino")
// pesoIdeal(alt, sex)

// function pesoIdeal(altura, sexo) {

//     if ((sexo == "m") || (sexo == "M")){
//         ideal = (72.7 * altura) - 58.0

//         console.log("O peso ideal = "+ ideal)
//     }

//     else if((sexo == "f") || (sexo == "F")){
//         ideal = (62.1 * altura) - 44.7

//         console.log("O peso ideal = "+ ideal)
//     }

//     else{
//         console.log("Parametro nao aceito") 
//     }

// }


// ex. 13

// let x = prompt("Digite um numero")
// let y = prompt("Digite um numero")
// let z = prompt("Digite um numero")
// resultado = ordernador(x,y,z)

// function ordernador(num1, num2, num3) {
    
//     input = [num1, num2, num3]
//     input.sort(function(a, b){
//         return a-b
//     })
//     console.log("Os numeros em ordem crescente sao:")
//     console.log(input)
        
// }    


// ex. 15

// let x = parseInt(prompt("Digite a medida de um lado do triangulo"))
// let y = parseInt(prompt("Digite a medida de um lado do triangulo"))
// let z = parseInt(prompt("Digite a medida de um lado do triangulo"))
// resultado = verifTriangulo(x,y,z)

// function verifTriangulo(lado1, lado2, lado3) {
//     if(lado1>(lado2+lado3) || lado2>(lado1+lado3) || lado3>(lado1+lado2)){
//         console.log("As medidas nao formam um triangulo")
        
//     }

//     else if((lado1==lado2) && (lado1==lado3)){
//     console.log("Formou-se um tringulo equilatero")

//     }

//     else if((lado1==lado2) || (lado1==lado3) || (lado2==lado3)){
//         console.log("Formou-se um tringulo isosceles")
//     }

//     else{
//         console.log("Formou-se um tringulo escaleno")
//     }

// }


// ex. 16


// let numPessoas = 0
// let somaSal = 0
// let somaFilho = 0
// let maiorSal = 0
// let percentual = 0
// let qtdSalP = 0

// for (;;) {

//     numPessoas++

//     filhos = parseInt(prompt("Informe a quantidade de filhos. Quando desejar parar e realizar o calculo digite -1."))
//         if (filhos <= 0) {
//             break;    
//          }

//     salario = parseInt(prompt("Informe o salario."))

//     calcSalarioFilhos(filhos, salario)
// }


// console.log("A media dos filhos = "+ mediaFilho)
// console.log("A media dos salarios = "+ mediaSal)
// console.log("O maior salario = "+ maiorSal)
// console.log("O percentual de pessoas com salario acima de 350 = "+ calcPorSalP(numPessoas, qtdSalP))

// function calcPorSalP(qtdSal, qtdSalP) {
//     return (100*qtdSalP)/(qtdSal - 1)

// }

// function calcSalarioFilhos(filhos, salario) {

//     somaFilho = somaFilho + filhos
//     mediaFilho = somaFilho/numPessoas

//     somaSal = somaSal + salario
//     mediaSal = somaSal/numPessoas

//     if (maiorSal < salario){
//         maiorSal = salario
//     }

//     if (salario<=350) {
//         qtdSalP++
//     }

// }



// ex. 17


// let soma = 0
// let cont = 0

// while (num != (-1)) {

//     num = parseInt(prompt("Informe um numero. Quando desejar parar e realizar o calculo digite -1."))  
//         if (num <= 0) {
//             break;    
//     }
//     mediaArit(num)
// }
// console.log("A media dos numeros digitados = "+ media)



// function mediaArit(numero) {
    
//     if (numero >= 0){

//         soma = soma + numero
//         cont++ 
            
//         media = soma/cont

//     }

//     return 0;    
// }


// ex. 18

// n = parseInt(prompt("Informe um numero para calcular seu fatorial."))
 
// calcFatorial(n)

// function calcFatorial(numero) {

//     for (fat = 1; numero > 1; numero = numero - 1){

//         fat = fat*numero
//     } 

//     console.log("Fatorial de "+ n+ " = "+ fat)  

//     return 0;
// }


// ex. 19

// i=0
// maior = 0
// menor = 9999999

// for(i=0; i<5; i++){
//     n = parseInt(prompt("Digite um numero."))

//     checarMaiorMenor(n)
// }

// console.log("O maior numero = "+ maior)
// console.log("O menor numero = "+ menor)



// function checarMaiorMenor(numeros) {

//     if (numeros>maior) {

//         maior=numeros    
//     }
    
//     if (numeros<menor){

//         menor=numeros
//     }

//     return 0;
// }


// ex. 20

// let num = parseInt(prompt("Digite um numero"))
// calcTabuada(num)

// function calcTabuada(numero) {

//     let i = 1

//     while (i <= numero) {
//         console.log(numero+ " x "+ i+ " = "+ numero*i)
//         i++  
//     }

//     return 0;

// }