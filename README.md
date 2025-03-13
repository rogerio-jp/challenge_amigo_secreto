# challenge_amigo_secreto
# Sorteio de Amigo Secreto

Este projeto é um sistema simples para cadastrar participantes e realizar um sorteio de amigo secreto.

## 🚀 Funcionalidades

- Adicionar amigos à lista
- Exibir os participantes cadastrados
- Sortear um participante sem repetir sorteios

## 📌 Tecnologias Utilizadas

- HTML, CSS e JavaScript
- Biblioteca `responsiveVoice` para síntese de voz

## 🛠️ Como Usar

1. Digite o nome do participante no campo de entrada.
2. Clique no botão "Adicionar" para inseri-lo na lista.
3. Após adicionar todos os participantes, clique em "Sortear" para escolher um nome aleatoriamente.

## 📖 Estrutura do Código

- `adicionarAmigo()`: Adiciona um novo participante à lista, evitando duplicatas e nomes vazios.
- `limparNome()`: Limpa o campo de entrada após adicionar um nome.
- `numeroAleatorio()`: Retorna um número aleatório dentro do tamanho da lista.
- `sortearAmigo()`: Realiza o sorteio garantindo que não haja repetição até que todos sejam sorteados.
- `exibirAmigosNaTela()`: Atualiza a lista de participantes na tela.

## 📌 Melhorias Implementadas

- Evita chamadas desnecessárias de funções.
- Verificação para evitar sorteios repetidos.
- Melhor organização do código.

## 📜 Licença

Este projeto é de livre uso e pode ser modificado conforme necessário.
