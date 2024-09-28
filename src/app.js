const readline = require("readline");
// var distance = prompt("Digite aqui a distância");
// var distance1 = prompt("Digite aqui a distância da casa");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nome = "";
let xp = 0;
let nivel = "";
newDialog();

function newDialog() {
  rl.question("Qual o seu nome? ", (name) => {
    nome = name;
    rl.question("Qual seu XP? ", (value) => {
      xp = parseInt(value);
      nivel = classification(xp);
      console.log(`"O Herói de nome *${nome}* está no nível de *${nivel}*"`);
      rl.close();
    });
  });
}

function classification(xp) {
  let nivel = "";
  // Se XP for menor do que 1.000 = Ferro
  // Se XP for entre 1.001 e 2.000 = Bronze
  // Se XP for entre 2.001 e 5.000 = Prata
  // Se XP for entre 5.001 e 7.000 = Ouro
  // Se XP for entre 7.001 e 8.000 = Platina
  // Se XP for entre 8.001 e 9.000 = Ascendente
  // Se XP for entre 9.001 e 10.000= Imortal
  // Se XP for maior ou igual a 10.001 = Radiante
  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else if (xp >= 10001) {
    nivel = "Radiante";
  } else {
    nivel = "Não encontrado!";
  }
  return nivel;
}
