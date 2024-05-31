import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";

import CriarTarefa from "./CriarTarefa";
import EditarTarefa from "./EditarTarefa";
import DeletarTarefa from "./DeletarTarefa";

//A função abaixo é usada para criar o array contendo os dados iniciais da listagem de tarefas.
function createData(
  idTarefa: number,
  tituloTarefa: string,
  descricaoTarefa: string,
  inicioTarefa: string,
  fimTarefa: string,
  statusTarefa: string,
  recursoTarefa: string
) {
  return {
    idTarefa,
    tituloTarefa,
    descricaoTarefa,
    inicioTarefa,
    fimTarefa,
    statusTarefa,
    recursoTarefa,
  };
}

//Definição do array contendo os dados iniciais da listagem de tarefas
const initialRows = [
  createData(
    1,
    "Tarefa 1",
    "Descrição da Tarefa 1",
    "2022-01-01",
    "2022-01-02",
    "Concluída",
    "Recurso 1"
  ),
  createData(
    2,
    "Tarefa 2",
    "Descrição da Tarefa 2",
    "2022-01-03",
    "2022-01-04",
    "Em Andamento",
    "Recurso 2"
  ),
  createData(
    3,
    "Tarefa 3",
    "Descrição da Tarefa 3",
    "2022-01-04",
    "2022-01-05",
    "Em Andamento",
    "Recurso 3"
  ),
  createData(
    4,
    "Tarefa 4",
    "Descrição da Tarefa 4",
    "2022-01-05",
    "2022-01-06",
    "Em Andamento",
    "Recurso 4"
  ),
  createData(
    5,
    "Tarefa 5",
    "Descrição da Tarefa 5",
    "2022-01-06",
    "2022-01-07",
    "Em Andamento",
    "Recurso 5"
  ),
  createData(
    6,
    "Tarefa 6",
    "Descrição da Tarefa 6",
    "2022-01-07",
    "2022-01-08",
    "Aguardando",
    "Recurso 6"
  ),
];

//Componente ListarTarefa
const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState();
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState([]);

  //Variáveis de estado do dialog de confirmação de exclusão
  const [openConfirm, setOpenConfirm] = useState(false);
  const [tarefaToDelete, setTarefaToDelete] = useState(null);
  const [taskToDeleteTitle, setTaskToDeleteTitle] = useState(null);

  //Funções que operam as variáveis de estado
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEditar = () => setOpenEditar(true);
  const handleCloseEditar = () => setOpenEditar(false);

  //Funções que controlam o estado do dialog de confirmação de exclusão
  const handleOpenConfirm = () => setOpenConfirm(true);
  const handleCloseConfirm = () => setOpenConfirm(false);

  //O array definido acima é setado como conteúdo do state Tarefas na renderização inicial do componente.
  useEffect(() => {
    setTarefas(initialRows);
  }, []);

  const handleEditar = (id) => {
    setIdTarefaSelecionada(id);

    //Objeto local para armazenamento da tarefa filtrada de acordo com a seleção do usuário
    let tarefaParaEditar = tarefas.filter((obj) => {
      return obj.idTarefa === id;
    })[0];

    //Atribuição do Objeto local, setado acima, ao state Tarefa
    setTarefa(tarefaParaEditar);

    //Seta como true o state responsável pela exibição do Model de Editar Tarefa
    setOpenEditar(true);
  };

  const handleDeletar = (id) => {
    //Seta a variável de estado que armazena o id do objeto que representa a tarefa a ser deletada
    setTarefaToDelete(id);

    //Define uma variável que armazena o objeto que representa a tarefa a ser deletada
    const foundTask = tarefas.find((t) => t.idTarefa === id);
    
    //Seta a variável de estado que armazena o título da tarefa a ser deletada (usado no dialog de confirmação de exclusão)
    setTaskToDeleteTitle(foundTask ? foundTask.tituloTarefa : '');

    //Seta a variável de estado que controla a visualização do dialog de confirmação de exclusão
    handleOpenConfirm();
  };

  //Função que 'deleta' a tarefa
  const confirmDelete = () => {
    //Usa a variável de estado tarefaToDelete para filtrar o array
    setTarefas((current) =>
      current.filter((tarefa) => tarefa.idTarefa !== tarefaToDelete)
    );
    setOpenConfirm(false);
    
    //Limpa a variável de estado que armazena o id da tarefa a ser deletada
    setTarefaToDelete(null);
  };

  //Construção do componente da página
  return (
    <div>
      {/*Card que contém o título, o conteúdo (tabela de tarefas) e os botões de ação (criar/cancelar)*/}
      <Card>
        <CardHeader title="Tarefas" subheader="Listagem de Tarefas" />
        <CardContent>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="center">Título</TableCell>
                  <TableCell align="center">Descrição</TableCell>
                  <TableCell align="center">Data de Início</TableCell>
                  <TableCell align="center">Data de Finalização</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Recurso</TableCell>
                  <TableCell align="center">Editar</TableCell>
                  <TableCell align="center">Deletar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tarefas.map((row, indice) => (
                  <TableRow
                    key={indice}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.idTarefa}
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                      {row.tituloTarefa}
                    </TableCell>
                    <TableCell align="center">{row.descricaoTarefa}</TableCell>
                    <TableCell align="center">{row.inicioTarefa}</TableCell>
                    <TableCell align="center">{row.fimTarefa}</TableCell>
                    <TableCell align="center">{row.statusTarefa}</TableCell>
                    <TableCell align="center">{row.recursoTarefa}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleEditar(row.idTarefa)}
                      >
                        <EditIcon fontSize="small" />
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          console.log(`Id da tarefa enviado quando é feito o clique no botão deletar: ${row.idTarefa}`)
                          handleDeletar(row.idTarefa)
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" onClick={handleOpen}>
            Criar Tarefa
          </Button>
          <Button size="small" variant="outlined">
            Cancelar
          </Button>
        </CardActions>
      </Card>

      {/*Div que contém o Modal que exibe a tela de criação de nova tarefa*/}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <CriarTarefa
              handleClose={handleClose}
              tarefas={tarefas}
              setTarefas={setTarefas}
            />
          </div>
        </Modal>
      </div>

      {/*Div que contém o Modal que exibe a tela de edição de tarefa*/}
      <div>
        <Modal
          open={openEditar}
          onClose={handleCloseEditar}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <EditarTarefa
              handleCloseEditar={handleCloseEditar}
              idTarefaSelecionada={idTarefaSelecionada}
              tarefas={tarefas}
              tarefa={tarefa}
              setTarefas={setTarefas}
            />
          </div>
        </Modal>
      </div>
      
      {/*Dialog de confirmação de exclusão*/}
      <div>
          <DeletarTarefa
            open={openConfirm}
            handleClose={handleCloseConfirm}
            confirmDelete={confirmDelete}
            taskTitle={taskToDeleteTitle}
          />
      </div>
    </div>
  );
};

export default ListarTarefa;
