document.getElementById('btn').addEventListener('click', listarSuperHeroes);

const superheroes = [
  {
    nome: "Tony Stark",
    idade: 45,
    isSuperHeroi: true,
    nomeSuperHeroi: "Homem de ferro",
    fortunaEstimada: 2000000000.99,
    relacionamentos: [
      {
        nome: "peper Pots",
        relacionamento: "Esposa",
      },
      {
        nome: "Morgan",
        relacionamento: "Filha",
      },
    ],
    equipes: ["Vingadores", "Campeoes"],
    empresa: {
      nome: "Stark Industries",
      sede: "Nova York",
    },
  },
  {
    nome: "Steve Rogers",
    idade: 45,
    isSuperHeroi: true,
    nomeSuperHeroi: "Capitão America",
    fortunaEstimada: 0.0,
    relacionamentos: [],
    equipes: ["Vingadores"],
    empresa: null,
  },
];

function listarSuperHeroes(){
    let container = document.getElementById('listaSuperHerois');

    let ul = document.createElement('ul');
    for (let index = 0; index < superheroes.length; index++) {
        const superHero = superheroes[index];
        let li = document.createElement('li');
        let text = document.createTextNode(superHero.nome);
        li.appendChild(text);
        ul.appendChild(li);
    }

    container.appendChild(ul);
}
