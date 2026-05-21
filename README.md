# Tabuada 

Gerador de tabuada desenvolvido como estudo prático de **JavaScript**, **HTML5** e **CSS3**, com base nos exercícios do **Curso em Vídeo**.

O objetivo do projeto é praticar lógica básica com JavaScript, entrada de dados, eventos, estrutura de repetição e exibição dinâmica de resultados na página.

## Sobre o projeto

O `tabuada` é uma aplicação simples onde o usuário informa um número e, ao clicar no botão, a página gera a tabuada desse número.

A aplicação trabalha com:

- Campo numérico;
- Botão de ação;
- Validação simples;
- Conversão de valor para número;
- Estrutura de repetição `for`;
- Escrita dinâmica do resultado no HTML.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura do repositório

```text
tabuada/
├── .vscode/
├── .gitattributes
├── README.md
├── ex002.html
├── script.js
└── style.css
```

## O que tem dentro

### `ex002.html`

Arquivo principal da página. Ele contém:

- Título do projeto;
- Campo para digitar um número;
- Botão “Gerar Tabuada”;
- Área onde o resultado é exibido;
- Importação do arquivo `script.js`.

### `script.js`

Arquivo responsável pela lógica do gerador. Ele:

- Lê o número digitado pelo usuário;
- Limpa o resultado anterior;
- Converte o valor para número;
- Valida se o dado é inválido;
- Usa um laço `for` para gerar a tabuada;
- Exibe o resultado dentro da página.

### `style.css`

Arquivo responsável pela aparência do projeto, incluindo:

- Cor de fundo;
- Estilo do cabeçalho;
- Card central;
- Área de resultado;
- Sombra;
- Rodapé.

## Como executar o projeto

1. Baixe ou clone este repositório:

```bash
git clone https://github.com/thamiscoder/tabuada.git
```

2. Acesse a pasta do projeto:

```bash
cd tabuada
```

3. Abra o arquivo `ex002.html` no navegador.

Também é possível executar com a extensão **Live Server** no Visual Studio Code.

## Como usar

1. Digite um número no campo.
2. Clique em **Gerar Tabuada**.
3. Veja a tabuada gerada na área de resultado.

## Observação

Atualmente, o script considera `0` como dado inválido e gera a tabuada usando um laço com 10 repetições.

## Aprendizados praticados

- Captura de dados do formulário;
- Conversão de string para número;
- Validação simples;
- Estrutura de repetição `for`;
- Manipulação de `innerHTML`;
- Eventos com `onclick`;
- Organização básica de arquivos front-end.

## Licença

Este projeto é de estudo. Caso deseje, adicione uma licença formal ao repositório para indicar as permissões de uso.
