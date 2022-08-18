import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Divider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useCategoriesStore, useUiStore } from '../../../hooks';

import { categoriesModal } from '../../../styles/components/categories';


export const CategoriesModal = () => {

    const {
        categories,
        categoryStartDeleted,
        categoryStartUpdated,
        startCreateCategory,
    } = useCategoriesStore();
    const {
        categoriesModal: categoriesModalStatus,
        startUiCloseCategoriesModal
    } = useUiStore();

    const [modalCreate, setModalCreate] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [categoryState, setCategoryState] = useState({
        name: '',
        user: {
            name: '',
            _id: ''
        },
        _id: ''
    });

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    const handleInputChange = (e) => {

        setCategoryState({
            ...categoryState,
            name: e.target.value
        })

    }

    const handleCreate = (event) => {
        event.preventDefault();

        setModalCreate(true);
    }

    const handleDelete = (event, category) => {
        event.preventDefault();

        setCategoryState(category);

        setModalDelete(true);
    }

    const handleEdit = (event, category) => {
        event.preventDefault();

        setCategoryState(category);

        setModalEdit(true);

    }



    const handleModalCreateClose = () => {

        setModalCreate(false);

        setCategoryState('');

    }

    const handleModalDeleteClose = () => {

        setModalDelete(false);

        setCategoryState('');

    }

    const handleModalEditClose = () => {

        setModalEdit(false);

        setCategoryState('');

    }

    const handleClose = () => {

        startUiCloseCategoriesModal();
    };


    const handleCreateSave = (e) => {
        e.preventDefault();

        handleModalCreateClose();

        startCreateCategory(categoryState);

        console.log(categoryState);

    }

    const handleDeleteSave = (e) => {
        e.preventDefault();

        handleModalDeleteClose();

        categoryStartDeleted(categoryState)

    }

    const handleEditSave = (e) => {
        e.preventDefault();

        handleModalEditClose();

        categoryStartUpdated(categoryState)

    }


    return (


        <Modal
            open={categoriesModalStatus}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Container sx={{ border: 'none' }} maxWidth="sm">
                <Box
                    sx={categoriesModal(sm, md, lg, xl)}>

                    <h1>Categories</h1>
                    <Divider />

                    <Container id='container'>
                        {
                            categories.map(e => (

                                <MenuItem key={e._id} name={e.name} value={e.name}>
                                    {e.name}
                                    <EditIcon id='EditIcon' onClick={event => handleEdit(event, e)} />
                                    <DeleteIcon id='DeleteIcon' onClick={event => handleDelete(event, e)} />
                                </MenuItem>
                            ))
                        }
                    </Container>

                    <Fab onClick={handleCreate} id='AddIcon'>
                        <AddIcon />
                    </Fab>

                    {
                        <Dialog open={modalCreate} onClose={handleModalCreateClose}>

                            <DialogTitle>Crear categoria</DialogTitle>

                            <DialogContent>

                                <DialogContentText>
                                    Escriba cuidadosamente el nombre de la categoria y tenga cuidado con las faltas de ortografia.
                                </DialogContentText>

                                <TextField
                                    onChange={handleInputChange}
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    value={categoryState.name}
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />

                            </DialogContent>

                            <DialogActions>
                                <Button onClick={handleModalCreateClose}>Cancelar</Button>
                                <Button onClick={handleCreateSave}>Guardar</Button>
                            </DialogActions>

                        </Dialog>

                    }

                    {
                        <Dialog open={modalEdit} onClose={handleModalEditClose}>

                            <DialogTitle>Editar categoria</DialogTitle>

                            <DialogContent>

                                <DialogContentText>
                                    Si se edita una categoria, todos los productos que se encuentren dentro de ella se veran afectados.
                                </DialogContentText>

                                <TextField
                                    autoFocus
                                    onChange={handleInputChange}
                                    margin="dense"
                                    id="name"
                                    value={categoryState.name}
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />

                            </DialogContent>

                            <DialogActions>
                                <Button onClick={handleModalEditClose}>Cancelar</Button>
                                <Button onClick={handleEditSave}>Guardar</Button>
                            </DialogActions>

                        </Dialog>

                    }

                    {
                        <Dialog open={modalDelete} onClose={handleModalDeleteClose}>

                            <DialogTitle>Eliminar categoria</DialogTitle>

                            <DialogContent>

                                <DialogContentText>
                                    No se podrá eliminar la categoria si esta se encuentra relacionada con al menos 1 producto.
                                    Está seguro que desea eliminar esta categoria permanentemente ?
                                </DialogContentText>

                            </DialogContent>

                            <DialogActions>
                                <Button onClick={handleModalDeleteClose}>No</Button>
                                <Button onClick={handleDeleteSave}>Si</Button>
                            </DialogActions>

                        </Dialog>

                    }

                    <Button
                        id="submitButton"
                        variant="outlined"
                        onClick={handleClose}
                    >Cerrar</Button>
                </Box>
            </Container>
        </Modal>
    );
}
