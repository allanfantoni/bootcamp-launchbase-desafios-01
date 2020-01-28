const nome = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

const somaIdadeContribuicao = idade + contribuicao;

if ((sexo == 'M' && contribuicao >= 35) || (sexo == 'F' && contribuicao >= 30)) {
  if ((sexo == 'M' && somaIdadeContribuicao >= 95) || (sexo == 'F' && somaIdadeContribuicao >= 85)) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, a soma de sua idade com seu tempo de contribuição não atende os requisitos mínimos.`);
  }
} else {
  console.log(`${nome}, seu tempo de contribuição não atende os requisitos mínimos.`);
}