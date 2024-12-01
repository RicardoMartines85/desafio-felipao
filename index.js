// Desafio Felipão desvendando o mundo de Zelda!

// declaração de variaveis
let heroi = "Link"
let qtdXP = 7458
let nivel = ""

//metodo

switch(true){
    case (qtdXP<1001):
   nivel = "ferro"   
    break

    case (qtdXP<2001):
   nivel = "Bronze"   
    break

    case (qtdXP<5001):
   nivel = "Prata"   
    break

    case (qtdXP<7001):
   nivel = "Ouro"   
    break

    case (qtdXP<8001):
   nivel = "Plantina"   
    break

    case (qtdXP<9001):
   nivel = "Ascendente"   
    break

    case (qtdXP<10001):
   nivel = "Imortal"   
    break

    default:
        nivel = "Radiante"

}
//saída

console.log ("O Herói de nome "+heroi+" está no nível de "+nivel)