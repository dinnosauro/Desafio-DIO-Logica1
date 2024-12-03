let nome="Dinno"
let xp="Prata"
switch (xp){
    case "Ferro":
        console.log("O herói " + nome, "está no nível de " + xp)    
    // Se XP for menor do que 1.000 = Ferro
    break;
    case "Bronze":
        console.log("O herói " + nome, "está no nível de " + xp)
    // Se XP for entre 1.001 e 2.000 = Bronze
    break;
    case "Prata":
    console.log("O herói " + nome, "está no nível de " + xp)
    // Se XP for entre 2.001 e 5.000 = Prata
    break;
    case "Ouro":
        console.log("O herói " + nome, "está no nível de " + xp)
        //Se XP for entre 5.001 e 7.000 = Ouro
    break;
    case "Platina": 
        console.log("O herói " + nome, "está no nível de " + xp)
        //Se XP for entre 7.001 e 8.000 = Platina
    break;
    case "Ascendente": 
        console.log("O herói " + nome, "está no nível de " + xp)
        //Se XP for entre 8.001 e 9.000 = Ascendente
    break;
    case "Imortal":
        console.log("O herói " + nome, "está no nível de " + xp)
        // Se XP for entre 9.001 e 10.000= Imortal
    break;
    case "Radiante":
        console.log("O herói " + nome, "está no nível de " + xp)
        // Se XP for maior ou igual a 10.001 = Radiante
    break;
}

//console.log ("O herói " + nome "está no nível de " + XP)