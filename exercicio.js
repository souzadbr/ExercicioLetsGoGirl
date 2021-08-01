// Indique o valor lógico (true ou false)das preposições abaixo:
//a - true && false =  false 
//b - false || false = true 
//c - "1" !== 1 = true 
//d - -1 menor -4 = false 
//e - !true =false 
//f - !false =true 
//g - -1 > -9 = true 
//h - true && true  = true 

//2 - Construa um algoritmo simples, que esteja presente no seu dia-a-dia. Por exemplo: ir trabalhar, ir ao cinema, sua rotina matinal.(Obseração: Não precisa codificar, apenas escrever passo a passo)
//Reposta:
// Acordo -> Levanto da cama -> coloco chinelo -> troco de roupa -> coloco tênis -> vou ao banheiro-> pego a escova de dentes -> pego a pasta de dentes-> coloco a pasta na escova-> escovo os dentes-> lavo o rosto-> seco o rosto na tolaha-> volto ao quarto-> pego minha bolsa -> vou para cozinha -> coloco minha bolsa na mesa -> faço meu café da manhã -> tomo café da manhã -> saiu de casa. 

//3- Crie uma variável imutável que receba : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], depois faça uma função, que retorne os valores pares na mesma. 

//const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//function pegaPar (numero) {
  //for (i=1;numero[i]<=20;i++){
    //if ( numero[i] %2 === 0)
    //console.log ("Os números pares são:"+ numero[i])
  //}

//}
//pegaPar (numeros)

//resposta:
//Os números pares são:2
//Os números pares são:4
//Os números pares são:6
//Os números pares são:8
//Os números pares são:10
//Os números pares são:12
//Os números pares são:14
//Os números pares são:16
//Os números pares são:18
//Os números pares são:20

//4 Faça uma função que converta Fahrenheit para Celsius. Ovalor de Celsius, será dinâmico. Faça alguns console.log chamando a função, e passando como valores:32, 25, 40, 42 
//Formula para cálculos : (F - 32)/1.8 

//const A = 32
//const B = 25 
//const C = 40 
//const D = 42 

//function conversaoFParaCelsius (graus) {
//  return (graus - 32 )/1.8;
//}

//console.log ("A conversão de Fahrenheit para Celsius é:" + conversaoFParaCelsius (A) ) resultado 0 celsius 

//console.log ("A conversão de Fahrenheit para Celsius é:" + conversaoFParaCelsius (B) ) resultado -3.888 celsius 

//console.log ("A conversão de Fahrenheit para Celsius é:" + conversaoFParaCelsius (C) ) resultado 4.444 celsius 

///console.log ("A conversão de Fahrenheit para Celsius é:" + conversaoFParaCelsius (D) ) resultado 5.5555 celsius 

//5 - Levando em consideração o array de objetos :

const redes = [ { 
  nome: "facebook",
  id: 1,
  possui: false
},
{
  nome: "instagram",
  id: 2,
  possui: false 
},
{
  nome: "github",
  id: 3,
  possui: true 
},
{
  nome:"linkedin",
  id: 4,
  possui: true 
},]

function retornaPossui (value) {
  if (value.possui == true)
  return value
}
const redesSocial = redes.filter (retornaPossui)
redesSocial.forEach (redesSoci=>{console.log (redesSoci)})

//resultado 
//{ nome: 'github', id: 3, possui: true }
//{ nome: 'linkedin', id: 4, possui: true }
function retornaInsta (value1) {
  if(value1.nome == "instagram")
  return value1
}
const redeInsta = redes.filter (retornaInsta)
redeInsta.forEach (sociInsta => {console.log (sociInsta)})

//resposta 
//{ nome: 'instagram', id: 2, possui: false }
function retornaFalse (value2) {
  if(value2.possui == false)
  return value2
}
redes.forEach (item => {
  item.possui = true 
})
console.log (redes)
