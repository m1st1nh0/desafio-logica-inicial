let nomeHeroi = "Jonas Heróico";
let Xp = "321841";
let nivelHeroi = "";

if (Xp < 1000){
    nivelHeroi = "Ferro";
} else if(Xp >= 1001){
    nivelHeroi = "Bronze";
} else if(Xp >= 2001){
    nivelHeroi = "Prata";
} else if(Xp >= 5001){
    nivelHeroi = "Ouro";
} else if(Xp >= 7001){
    nivelHeroi = "Platina";
} else if(Xp >= 8001){
    nivelHeroi = "Ascendente";
}else if(Xp >= 9001){
    nivelHeroi = "Imortal";
}else if(Xp >= 1001){
    nivelHeroi = "Radiante";
}

console.log("O Herói de nome "+ nomeHeroi+" Esta no nível " +nivelHeroi)