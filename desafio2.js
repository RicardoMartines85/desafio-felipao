//declaração de variaveis

let vitorias = 200
let derrota = 5

//metodo
let saldoVitorias = calcularSaldo(vitorias,derrota)
let rankeada = nivelHeroi(saldoVitorias)

//Teste
//console.log(saldoVitorias)
//console.log(rankeada)

// função Saldo
function calcularSaldo(vitorias,derrota){

    let saldo = vitorias - derrota
    return saldo

}

// função Nivel de acordo com o saldo
function nivelHeroi(saldoVitorias){

    switch(true){
       case (saldoVitorias<=10):
       return "Ferro"
       break

       case (saldoVitorias<=20):
        return "bronze"
        break   

       case (saldoVitorias<=50):
        return "Prata"
        break   

        case (saldoVitorias<=80):
        return "Ouro"
        break   
        
        case (saldoVitorias<=90):
        return "Diamnte"
        break 
        
        case (saldoVitorias<=100):
        return "Lendário"
        break   

        default:
        return "Imortal"  

        }
}

//Saida
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${rankeada}`)

