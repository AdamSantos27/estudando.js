let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log('pode aplicar: ',podeAplicar);

let candidatoRecusado = !podeAplicar;

console.log('Candidato Recusado',candidatoRecusado)