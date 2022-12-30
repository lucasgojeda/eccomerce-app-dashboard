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
import { Button, Divider, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useCategoriesStore, useUiStore } from '../../../hooks';

import '../../../styles/components/categories/modals/_categoriesModal.scss';


export const CategoriesModal = () => {

    const {
        categories,
        activeCategory,
        categoryStartDeleted,
        categoryStartUpdated,
        startCreateCategory,
        startSetActiveCategory,
        startClearActiveCategory,
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

    const handleSetActiveCategory = (e, category) => {
        e.preventDefault();

        startSetActiveCategory(category);
    }

    const handleCreate = (event) => {
        event.preventDefault();

        setModalCreate(true);
    }

    const handleDelete = (e) => {
        e.preventDefault();

        setCategoryState(activeCategory);

        setModalDelete(true);
    }

    const handleEdit = (e) => {
        e.preventDefault();

        setCategoryState(activeCategory);

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

        startClearActiveCategory();

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
                <Box className='mainCaregoriesModalContainer'>

                    <>
                        <div className='titleContainer'>
                            <Typography variant='body2' className='title'>
                                Edit categories
                            </Typography>
                        </div>
                        <Divider />
                    </>


                    <Container id='container'>
                        {
                            categories.map((e, i) => (

                                <MenuItem
                                    sx={{
                                        backgroundColor: (activeCategory?._id === e._id) ? 'rgba(93, 6, 129, 0.25)' : (i % 2 === 0) && 'rgba(0, 113, 255, 0.25)',
                                        ':hover': {
                                            backgroundColor: 'rgba(127, 41, 185, 0.5)',
                                            color: '#fff',
                                            cursor: 'pointer'
                                        }
                                    }}
                                    onClick={(event) => handleSetActiveCategory(event, e)}
                                    key={e._id} name={e.name} value={e.name}>

                                    {e.name}
                                </MenuItem>
                            ))
                        }

                    </Container>


                    <div className='editionItemsContainer'>

                        {
                            (activeCategory)
                            &&
                            <IconButton
                                id='DeleteIcon'
                                color="inherit"
                                onClick={handleDelete}
                            >
                                <DeleteIcon />

                            </IconButton>
                        }

                        <IconButton
                            id='AddIcon'
                            color="inherit"
                            onClick={handleCreate}
                        >
                            <AddIcon />

                        </IconButton>

                        {
                            (activeCategory)
                            &&
                            <IconButton
                                id='EditIcon'
                                color="inherit"
                                onClick={handleEdit}
                            >
                                <EditIcon />

                            </IconButton>
                        }

                    </div>

                    {
                        <Dialog open={modalCreate} onClose={handleModalCreateClose}>

                            <DialogTitle>Create new category</DialogTitle>

                            <DialogContent>

                                <DialogContentText>
                                    Write the name of the category carefully and be careful with misspellings.
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
                                <Button onClick={handleModalCreateClose}>Cancel</Button>
                                <Button onClick={handleCreateSave}>Save</Button>
                            </DialogActions>

                        </Dialog>

                    }

                    {
                        <Dialog open={modalEdit} onClose={handleModalEditClose}>

                            <DialogTitle>Edit category</DialogTitle>

                            <DialogContent>

                                <DialogContentText>
                                    If a category is edited, all products within it will be affected.
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
                                <Button onClick={handleModalEditClose}>Cancel</Button>
                                <Button onClick={handleEditSave}>Save</Button>
                            </DialogActions>

                        </Dialog>

                    }

                    {
                        <Dialog open={modalDelete} onClose={handleModalDeleteClose}>

                            <DialogTitle>Delete category</DialogTitle>

                            <DialogContent>

                                <DialogContentText>
                                    The category cannot be deleted if it is related to at least 1 product.
                                    Are you sure you want to delete this category permanently?
                                </DialogContentText>

                            </DialogContent>

                            <DialogActions>
                                <Button onClick={handleModalDeleteClose}>No, I don't</Button>
                                <Button onClick={handleDeleteSave}>Yes, I do</Button>
                            </DialogActions>

                        </Dialog>

                    }

                    <Button
                        id="submitButton"
                        variant="outlined"
                        onClick={handleClose}
                    >Close</Button>
                </Box>
            </Container>
        </Modal>
    );
}
