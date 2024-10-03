const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let vitorias = 0;
let derrotas = 0;
let nivel = "";
newDialog();

function newDialog() {
  rl.question("Quantidade de vitórias? ", (v) => {
    vitorias = parseInt(v);
    rl.question("Quantidade de derrotas? ", (d) => {
      derrotas = parseInt(d);
      let saldoVitorias = vitorias - derrotas;
      nivel = classification(vitorias);

      //       Ao final deve se exibir uma mensagem:
      // "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
      console.log(
        `"O Herói tem de saldo de *${saldoVitorias}* está no nível de *${nivel}*"`
      );
      rl.close();
    });
  });
}

function classification(xp) {
  let nivel = "";
  // Se vitórias for menor do que 10 = Ferro
  // Se vitórias for entre 11 e 20 = Bronze
  // Se vitórias for entre 21 e 50 = Prata
  // Se vitórias for entre 51 e 80 = Ouro
  // Se vitórias for entre 81 e 90 = Diamante
  // Se vitórias for entre 91 e 100= Lendário
  // Se vitórias for maior ou igual a 101 = Imortal
  if (xp <= 10) {
    nivel = "Ferro";
  } else if (xp >= 11 && xp <= 20) {
    nivel = "Bronze";
  } else if (xp >= 21 && xp <= 50) {
    nivel = "Prata";
  } else if (xp >= 51 && xp <= 80) {
    nivel = "Ouro";
  } else if (xp >= 81 && xp <= 90) {
    nivel = "Diamante";
  } else if (xp >= 91 && xp <= 100) {
    nivel = "Lendário";
  } else if (xp >= 101) {
    nivel = "Imortal";
  } else {
    nivel = "Não encontrado!";
  }
  return nivel;
}
