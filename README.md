# Diligence Hub Test

![GitHub repo size](https://img.shields.io/github/repo-size/lucasprzm/diligence-hub-test?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/lucasprzm/diligence-hub-test?style=for-the-badge)

> Uma página de administrador para exibir, criar, editar e excluir usuários, construída utilizando React e Node.js para o teste técnico da Diligence Hub.

## Funcionalidades

### Front-end

- [ ] Tela de Criação de Usuários
- [ ] Tabela de Usuários Cadastrados
- [ ] Tela de Edição de Usuários
- [ ] Consumo de API no back-end

### Back-end

- [x] Endpoint de cadastro de usuários
- [x] Endpoint de edição de usuários
- [x] Criação da tabela de usuários no banco de dados (SQLite)
- [x] Endpoint para excluir usuários
- [x] Endpoint para obter todos os usuários cadastrados

## Frameworks e Bibliotecas externas

### Front-end

- React - Framework JavaScript para construir interfaces de usuários.
- React Router - usado para criar rotas no front-end do projeto.
- Axios - usado para fazer requisições XMLHttp do navegador para a API.
- Tailwind - framework responsivo para criar sites responsivos.

### Back-end

- Node.js - ambiente de execução JavaScript para criação de aplicações sem depender de um browser para execução.
- Express - Framework para aplicações web com Node.js.
- TypeORM - ORM para realizar as queries do banco de dados.
- SQLite - banco de dados.
- Cors - biblioteca que libera o CORS para acesso do front-end ao back-end.
- Uuid - biblioteca para criar identificadores únicos universais.

## 💻 Pré requisitos do projeto

Antes de começar, verifique se você tem os requisitos a seguir:

- Versão LTS mais recente do NodeJS

## 🚀 Instalação

- Clone o projeto desse repositório;
- Para instalar o projeto, siga as etapas seguintes para o front-end e back-end.

### Front-end

Abra o terminal de sua preferência, acesse a pasta front-end-react e instale as dependências do projeto com o seguinte comando:

```
npm install
```

Após a instalação, utilize o comando seguinte para rodar o servidor:

```
npm run dev
```

Pronto! O front-end estará rodando na porta 3000 do servidor local:

```
http://localhost:3000
```

### Back-end

Abra o terminal de sua preferência, acesse a pasta back-end-node e instale as dependências do projeto com o seguinte comando:

```
npm install
```

Após a instalação, utilize o comando seguinte para rodar o servidor:

```
npm run dev
```

Pronto! O back-end estará rodando na porta 3333 do servidor local e o front-end já pode criar, editar, mostrar e excluir usuários.

```
http://localhost:3333
```

## 🤝 Desenvolvedores

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/60558571?v=4" width="100px;" alt="Lucas's picture on GitHub"/><br>
        <sub>
          <b>Lucas Prazeres de Matos</b>
        </sub>
      </a>
    </td>
  </tr>
</table>