//git add .(tudo) ou git add nomedoarquivo
//git commit -m "essas foram as mudancas feitas..."
//git push -u origin main

// Declarando variáveis
let nomeHeroi = "Iuri"
let xpHeroi = 10001
let nivelHeroi

// Estrutura de decisão
if (xpHeroi <= 1000) {
    nivelHeroi = "Ferro"
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze"
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata"
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro"
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina"
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente"
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal"
} else {
    nivelHeroi = "Radiante"
}

// Saída de dados
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)