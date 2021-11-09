# Chapter I Desafio 02 - WatchMe 

<p align="center">
  <img 
    src="https://user-images.githubusercontent.com/53442803/140961323-8f5086cb-f549-43fc-a700-faebe463e4b0.gif"
    width="70%"
  />
</p>

Desafio facultativo proposto para praticar os topicos abordados no Ignite **[@RocketSeat](https://www.rocketseat.com.br/)**, Chapter I da trilha de ReactJS.

### Sobre

O principal objetivo é refatorar a pagina de listagem de filmes de acordo com o gênero.
A aplicação ja esta totalmente funcional, porem o codigo esta em grande parte concentrada no arquivo ```App.tsx```.

- A aplicação possui apenas uma funcionalidade principal que é a listagem de filmes;
- Na sidebar é possível selecionar qual categoria de filmes deve ser listada;
- A primeira categoria da lista (que é "Ação") já deve começar como marcada;
- O header da aplicação possui apenas o nome da categoria selecionada que deve mudar dinamicamente.

## Objetivo
Clonar o template disponibilizado, instalar as dependencias, rodar a fake API com ```yarn server```, então seguir o desafio criando **pelo menos** os componentes SideBar e Content que já estão com os arquivos criados.
Os arquivos a serem editados são:

- **src/App.tsx**
Esse componente contém toda a aplicação com exceção do componente `Button` que não precisa ser alterado e `Icon` que também não precisa de alteração.
- **src/components/Content.tsx**
Esse componente, ainda vazio, deve possuir toda a lógica e corpo responsável pelo header e conteúdo da aplicação.
- **src/components/SideBar.tsx**
Esse componente, também vazio, deve possuir toda a lógica e corpo responsável pela seção que contém o título do site e a parte de navegação à esquerda da página.

***Componentizar outras partes da aplicação são opcionais***