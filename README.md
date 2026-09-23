# API com Docker 🐳

Aplicação desenvolvida com **NestJS**, **TypeORM** e **MySQL**, utilizando **Docker** e **Docker Compose**.

O projeto utiliza dois containers:

- **api-com-docker** — aplicação NestJS
- **api-com-docker-mysql** — banco de dados MySQL

Os serviços se comunicam através da rede Docker `api-network`, e os dados do MySQL são persistidos através de um volume.

## Pré-requisitos

Para executar o projeto é necessário ter instalado:

- Docker
- Docker Compose

## Configuração

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta:

```bash
cd api-com-docker
```

Crie o arquivo `.env` a partir do `.env.example`

> O arquivo `.env` não deve ser enviado para o GitHub. Utilize o `.env.example` como referência para configurar o ambiente.

## Executando o projeto

Para construir as imagens e iniciar os containers:

```bash
docker compose up --build
```

Para executar em segundo plano:

```bash
docker compose up --build -d
```

O Docker Compose irá iniciar automaticamente a aplicação e o banco MySQL.

## Verificando os containers

Para verificar se os containers estão funcionando:

```bash
docker compose ps
```

Ou:

```bash
docker ps
```

Os containers esperados são:

```text
api-com-docker
api-com-docker-mysql
```

## Acessando a aplicação

Com os containers em execução, a API estará disponível em:

```text
http://localhost:3000
```

Você pode testar utilizando navegador, Postman, Insomnia ou:

```bash
curl http://localhost:3000
```

## Visualizando os logs

Logs da API:

```bash
docker compose logs -f api-docker
```

Logs do MySQL:

```bash
docker compose logs -f mysql
```

## Testando a conexão com o MySQL

A API acessa o banco através da rede Docker utilizando:

```text
mysql:3306
```

Para acessar o banco manualmente:

```bash
docker compose exec mysql mysql -u api_user -p api-com-docker-db
```

Digite a senha configurada em `MYSQL_PASSWORD`.

Depois de entrar no MySQL, você pode verificar o banco:

```sql
SELECT DATABASE();
```

E listar as tabelas:

```sql
SHOW TABLES;
```

## Persistência dos dados

Os dados do MySQL são armazenados no volume:

```text
mysql_data
```

Por isso, remover ou recriar o container não remove automaticamente os dados do banco.

## Parando os containers

Para parar e remover os containers:

```bash
docker compose down
```

Para remover também os dados armazenados no volume:

```bash
docker compose down -v
```

> Atenção: o comando com `-v` remove os dados persistidos do banco.

## Estrutura Docker

O projeto utiliza:

- Dockerfile com **multi-stage build**
- Node.js 22 para o build
- Node.js 22 Alpine para execução
- Docker Compose
- MySQL 8.4
- Volume persistente `mysql_data`
- Rede customizada `api-network`
- Variáveis de ambiente
- Usuário `api_user` para acesso da aplicação ao banco