// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)
class TipoDeHeroi {
  constructor(name, ataque) {
    this.name = name;
    this.ataque = ataque;
  }
}

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
class Heroi {
  constructor(name, idade, tipo) {
    this.name = name;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    console.log(`o ${this.tipo.name} atacou usando ${this.tipo.ataque}`);
  }
}

let mago = new TipoDeHeroi("mago", "magia");
let guerreiro = new TipoDeHeroi("guerreiro", "espada");
let monge = new TipoDeHeroi("monge", "artes marciais");
let ninja = new TipoDeHeroi("ninja", "shuriken");

let HeroiMago = new Heroi("Garibou", 532, mago);
let HeroiGuerreiro = new Heroi("Harold Hardrada", 14, guerreiro);
let HeroiMonge = new Heroi("Shaolin", 45, monge);
let HeroiNinja = new Heroi("Naruto", 15, ninja);

HeroiMago.atacar();
HeroiGuerreiro.atacar();
HeroiMonge.atacar();
HeroiNinja.atacar();
