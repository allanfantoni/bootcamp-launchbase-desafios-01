# Desafio 01-1. Primeiros passos com JS

Desafios para fortalecer os conhecimentos obtidos até aqui.

## Cálculo de IMC

Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o `nome`, `peso`, `altura` e `sexo` de uma pessoa, por exemplo:

```js
const nome = 'Carlos'
const peso = 84
const altura = 1.88
```

A partir desses dados armazene em uma constante chamada `imc` o cálculo do índice de massa corporal definido pela fórmula abaixo: 

```js
peso / (altura * altura)
```

Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

- `SE` o `IMC` maior ou igual a `30`: Carlos você está acima do peso;
- `SE` o `IMC` menor que `29.9`: Carlos você não está acima do peso;

## Cálculo de aposentadoria

Crie um programa para calcular a aposentadoria de uma pessoa.

*Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)*

Comece criando constantes para armazenar `nome`, `sexo`, `idade` e `contribuicao`(em anos), por exemplo:

```js
const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23
```

Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

- O tempo de contribuição mínimo para **homens** é de **35 anos** e, para **mulheres**, **30 anos**;
- Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do **homem** precisa ser de no mínimo 95 anos, enquanto a **mulher** precisa ter no mínimo 85 anos na soma;

Com base nas regras acima imprima na tela as mensagens:

- `SE` a pessoa estiver aposentada: `Silvana, você pode se aposentar!`;
- `SE` a pessoa NÃO estiver aposentada: `Silvana, você ainda não pode se aposentar!`;

*Dica: Você pode unir duas condições, veja o exemplo abaixo*

```js
if (condicao1) {
  if (condicao2) {
    // Condição 1 e 2 passaram
  } else { 
    // Condição 1 passou, porém condição 2 não passou
  }
} else {
  // Condição 1 não passou
}
```

---

# Desafio 01-2. Lidando com objetos e vetores

Desafios para fortalecer os conhecimentos obtidos até aqui.

## Construção e impressão de objetos

Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado `empresa`. Os dados a serem armazenados são:

- Nome: Rocketseat
- Cor: Roxo
- Foco: Programação
- Endereço:
  - Rua: Rua Guilherme Gembala
  - Número: 260
  
*Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados, por exemplo:*

```js
const usuario = {
  nome: 'Diego',
  empresa: {
    nome: 'Rocketseat'
  },
}
```

Imprima em tela utilizando `console.log` o nome da empresa e seu endereço no seguinte formato:

```
A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260
```

*Obs. Para imprimir em tela utilize o formato de template strings, por exemplo*

```js
console.log(`O nome do usuário é ${usuario.nome}`);
```

## Vetores e objetos

Crie um programa com um objeto para armazenar dados de um programador como `nome`, `idade` e `tecnologias` que trabalha. 

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array. 

As tecnologias também devem ser objetos contendo `nome` e `especialidade`, use as tecnologias abaixo:

```js
{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
```

Por exemplo:

```js
const objeto = {
  propriedade: [
    { nome: 'C++', especialidade: 'Desktop' }, 
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}
```

Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

```
O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
```
