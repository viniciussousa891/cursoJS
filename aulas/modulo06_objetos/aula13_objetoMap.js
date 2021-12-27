// O map é uma estrutura de dados

// Nesse exemplo, o que foi feito foi determinar o indice
// da posição no Map igual ao valor do id do objeto recebido
// sem alterar a ordem de chegada

const pessoas = [
  { id: 3, nome: "Vinicius" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" }
];

const novasPessoas = new Map();

for (const pessoa of pessoas){
  const { id } = pessoa;
  novasPessoas.set(id, {...pessoa});
}

// Agora, para inserir valores dentro do map, usamos o set
// e para buscar valores pelo indice, usamos o get
novasPessoas.set(4, {id: 4, nome: "Fabrício"});
console.log(novasPessoas.get(4));


for (const [identifier, {id, nome}] of novasPessoas){
  console.log(identifier, id, nome);
}

// Eliminar uma chave
novasPessoas.delete(2);
console.log(novasPessoas);