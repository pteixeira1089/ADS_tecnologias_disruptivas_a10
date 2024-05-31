# Aplicação React de Gerenciamento de Projetos e Tarefas

Projeto criado com as bibliotecas React JS e Material UI.

##Notas ao professor que irá corrigir a atividade
O que foi solicitado: alterar funcionalidades e/ou formatações no template fornecido

O que foi feito:
1. Criação de um novo componente chamado 'DeletarTarefa' (arquivo DeletarTarefa.jsx):
O componente utiliza a biblioteca Dialog, da Material UI (https://mui.com/material-ui/react-dialog/), e implementa uma interface que solicita ao usuário que confirme se realmente deseja excluir o registro selecionado para exclusão. O componente é 'chamado' quando o usuário clica no botão 'excluir', ao lado de cada registro.

2. Alteração do tema utilizado:
Alterei o tema utilizado em todo o projeto, editando as cores que são aplicadas aos componentes quando utilizados os argumentos 'color=primary' e 'color=secondary' na construção dos componentes. O código que implementa a alteração pode ser consultado no arquivo 'App.js'. A alteração foi feita conforme recomenda a documentação do Material UI, disponível em https://mui.com/material-ui/customization/theming/

Conceitos das aulas que foram utilizados nesta atividade:
1. Ideia
Percebi que, no template fornecido, a deleção do registro era feita de forma imediata, após o clique no botão de deletar. Além disso, notei também que, de todas as operações CRUD, apenas a 'DELETE' ainda não tinha um componente próprio, de forma que toda a lógica do processo de exclusão estava implementada dentro do componente 'ListarTarefa', que está mais fortemente associado com a operação 'READ'. Dessa forma, pensei em implementar uma janela de confirmação de deleção do registro, gerando este componente em um arquivo próprio (DeletarTarefa.jsx)

2. Utilização da documentação:
Conforme ensinado nas aulas, fiz consultas à documentação da Material UI, disponível em https://mui.com/, para aprender como utilizar

## Passo-a-passo para execução

1. Clonar o repositório
2. Localmente, entrar na pasta do projeto e instalar as dependências:
   `
   npm install
   `
3. Executar a aplicação:
   `
   npm start
   `