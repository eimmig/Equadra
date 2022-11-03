# EQuadra 🏀

Projeto final para a JAVA School MJV, desenvolvido em React.js + Java 11. Essa aplicação web tem o intuito de ajudar e resolver um problema comum entre os praticantes de esporte, a busca por um local. A principal finalidade é que pessoas possam cadastrar quadras esportivas enquanto usuários podem também ver as informações referente a essa quadra quando estão em busca de um local para praticar o esporte.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos

Para instalar esse projeto será preciso que você tenha a versão 11 do JAVA instalada em sua máquina. Como também será preciso que tenha o Node.js instalado para rodar o FrontEnd da aplicação.

```
https://nodejs.org/en/download/
```
```
https://www.java.com/pt-BR/download/
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Faça o clone do projeto:

```
$ git clone https://github.com/eimmig/Equadra.git
```

Abra a pasta Client

```
$ cd /equadra/client
```
Instale o package.json

```
$ npm i
```
Abre o Client com sua IDE e rode a aplicação com o seguinte comando:

```
$ npm start
```

Abre o server com sua IDE e rode a aplicação

```
Lembre-se de verificar se o Maven está ok.
```

## 📦 Implantação

Por ser uma aplicação front e backend resolvi usar o Reac.js por ser uma tecnologia que eu não tinha muito conhecimento e vi uma oportunidade para aperfeiçoar minhas skills como desenvolvedor. Cada página se encontra na pasta `pages` onde possuem seu CSS isolado. Em questão do back-end, dividi os arquivos em controllers, segregando as funções de cada um. Todos os Controllers estendem de um controller genérico, o qual faz a maioria das operações existentes na aplicação.

A comunicação entre ambas as aplicações é realizada com o axios, o qual faz requisições do tipo POST, GET, DELETE por exemplo. Ele é o responsável por interligar os dois ambientes. As rotas estão configuradas para receber um objeto do tipo ID (que é montado ao estender do controller genérico) ou uma Entidade completa. A rota de validação de senha é uma rota independente que recebe um POST e utiliza a função `matches` do encriptador para ver se a senha está correta.

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [React](https://reactjs.org/docs/getting-started.html) - A biblioteca web utilizada
* [Maven](https://maven.apache.org/) - Gerente de Dependência
* [JAVA](https://www.java.com/pt-BR/) - Linguagem back-end utilizada
* [Spring](https://spring.io/) - Framework utilizado
* [PostgreSQL](https://www.postgresql.org/) - Banco de Dados

## ✒️ Autores

* **Eduardo Mateus Immig** - *Desenvolvedor* - [eimmig](https://github.com/eimmig)
---
