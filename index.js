let heroName = "Thiago"
let heroXp = 3511

function getHeroLevel(heroXp){
    if (heroXp >= 0 && heroXp < 1000) {
        return "Ferro"
    }
    else if (heroXp >= 1001 && heroXp < 2000){
        return "Bronze"
    }
    else if (heroXp >= 2001 && heroXp < 3000){
        return "Prata"
    }
    else if (heroXp >= 3001 && heroXp < 4000){
        return "Ouro"
    }
    else if (heroXp >= 4001 && heroXp < 5000){
        return "Platina"
    }
    else if (heroXp >= 5001 && heroXp < 6000){
        return "Ascendente"
    }
    else if (heroXp >=6001 && heroXp < 7000){
        return "Imortal"
    }
    else (heroXp >= 7001);{
        return "Radiante"
    }
}