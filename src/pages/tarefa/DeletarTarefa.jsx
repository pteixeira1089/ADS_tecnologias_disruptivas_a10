import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


//Compomente que representa a janela de exclusão do conteúdo
const DeletarTarefa = ({ open, handleClose, confirmDelete, taskTitle }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-description"
    >
      <DialogTitle id="confirm-dialog-title">Confirmar Exclusão</DialogTitle>
      <DialogContent>
        <DialogContentText id="confirm-dialog-description">
          Tem certeza que deseja excluir {taskTitle ? `"${taskTitle}"` : "esta tarefa"}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose} color="primary">Cancelar</Button>
        <Button variant="contained" onClick={confirmDelete} color="error" autoFocus>Excluir</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletarTarefa;