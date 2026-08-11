# API de Logística e Entregas (Rápido Logg)

> Projeto desenvolvido com o objetivo de praticar desenvolvimento backend, criação de APIs REST e gerenciamento de entregas e logística.

---

## Sobre o Projeto

Este projeto foi desenvolvido para a criação de uma API de gerenciamento de serviços de logística e entregas (**Rápido Logg**), aplicando boas práticas de arquitetura backend, organização de código e regras de negócio.

A aplicação permite gerenciar entregas, clientes, entregadores e status dos pacotes, otimizando o acompanhamento do fluxo operacional da logística.

Utilizei controllers, migrations, relacionamentos entre tabelas, validação de dados e comunicação com banco de dados utilizando Knex.

---

### Funcionalidades implementadas

- Cadastro e listagem de clientes
- Cadastro e gerenciamento de entregadores
- Criação e acompanhamento de entregas
- Atualização e histórico de status das entregas
- Validação de dados utilizando Zod

---

## Endpoints Desenvolvidos

### Clientes

#### Cadastrar Cliente

**POST** `/clients`

#### Listar Clientes

**GET** `/clients`

#### Buscar Cliente por ID

**GET** `/clients/:id`

---

### Entregadores

#### Cadastrar Entregador

**POST** `/deliverers`

#### Listar Entregadores

**GET** `/deliverers`

---

### Entregas

#### Criar Entrega

**POST** `/deliveries`

#### Listar Entregas

**GET** `/deliveries`

#### Buscar Entrega por ID

**GET** `/deliveries/:id`

#### Atualizar Status da Entrega

**PATCH** `/deliveries/:id/status`

---

## Regras Implementadas

- Não permite o cadastro de entregas sem informações obrigatórias (ex: destinatário, endereço e cliente associado).
- Verifica a existência do cliente e do entregador antes de vincular ou iniciar uma entrega.
- Valida os estados de transição de status da encomenda para impedir inconsistências no fluxo.
- Garante o tratamento correto de erros e retorno de códigos HTTP adequados.

---

## Tecnologias Utilizadas

<div align="left">

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" />
<img src="https://img.shields.io/badge/Knex.js-E16426?style=for-the-badge&logo=knexdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" />

</div>

---

## Testes

Utilizei o **Insomnia** para testar as rotas da API, validar respostas e verificar o funcionamento das regras implementadas.

---

## Execução Local

Clone o repositório:

```bash
git clone [https://github.com/MayconSantos04/Rapido-Logg.git](https://github.com/MayconSantos04/Rapido-Logg.git)
```
Acesse a pasta do projeto:
```bash
Acesse a pasta do projeto:
```
Instale as dependências:
```bash
npm install
```
Execute as migrations:
```bash
npm run knex -- migrate:latest
```
Execute o projeto:
```bash
npm run dev
```
