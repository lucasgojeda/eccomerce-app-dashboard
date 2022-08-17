import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Image } from 'cloudinary-react';

import ImageCropDialog from "../../ui/ImageCropDialog";

import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/es';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import ListItemText from '@mui/material/ListItemText';
import { Button, Typography } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Divider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { uiCloseRecordModal } from '../../../store/slices/uiSlice';

import { TabNavRecordModal } from '../../ui/TabNavRecordModal';

import { styles__recordModal } from '../../../styles/dashboard/modals/styles__recordModal';

moment.locale('es');


export const RecordModal = () => {

    const dispatch = useDispatch();

    const { recordModal } = useSelector(state => state.ui);
    const { activeRecord } = useSelector(state => state.records);


    const [productUpdate, setProductUpdate] = useState(0);

    const [counterImageBefore, setCounterImageBefore] = useState(1);

    const [counterImageAfter, setCounterImageAfter] = useState(1);


    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    if (activeRecord) {

        var { name, action, type, date, user, details } = activeRecord;
    }

    const handleClose = () => {
        setCounterImageBefore(1);
        setCounterImageAfter(1);
        dispatch(uiCloseRecordModal())
    };

    if (!activeRecord) {
        return <></>;
    }

    return (


        <div>


            <Modal
                open={recordModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container maxWidth="sm">
                    <Box
                        sx={styles__recordModal(sm, md, lg, xl)}
                    >
                        <Typography variant='body2' id='title'>
                            Registro
                        </Typography>


                        <Divider />
                        <Container id='itemsContainer'>

                            <ListItemText id='user' primary={`Nombre: ${user.name}`} />
                            <ListItemText id='action' primary={`Acción: ${action}`} />
                            <ListItemText id='user' primary={`Email: ${user.email}`} />
                            <ListItemText id='type' primary={`Tipo: ${type}`} />
                            <ListItemText id='date' primary={`Fecha: ${moment(date).tz("America/Argentina/Buenos_Aires").format('LLL')}`} />

                        </Container>

                        <Divider />

                        {
                            (action !== 'UPDATE' && (type === 'PRODUCT' || type === 'BIN-PRODUCT'))
                            &&
                            <>
                                <h4>
                                    Detalles
                                </h4>

                                <Container id='detailsContainer'>

                                    <ListItemText id='name' primary={`Nombre: ${name}`} />
                                    <ListItemText id='category' primary={`Categoria: ${details.category.name}`} />
                                    <ListItemText id='price' primary={`Precio: $${new Intl.NumberFormat('es-IN').format(details.price)}`} />
                                    <ListItemText id='quantity' primary={`Cantidad: ${details.quantity}`} />
                                    <ListItemText id='description' primary={`Descripción: ${details.description}`} />

                                    <Container id='containerImage'>

                                        {
                                            (!sm)
                                            &&
                                            <IconButton
                                                disabled={(details.img.length === 0 || details.img.length === 1 || counterImageBefore <= 1)}
                                                color="primary"
                                                component="span"
                                                onClick={() => setCounterImageBefore(counterImageBefore - 1)}
                                            >
                                                <ArrowLeftIcon id='ArrowIcon' />
                                            </IconButton>
                                        }

                                        {
                                            (details.img === [] || details.img.length !== 0)
                                            &&
                                            <>

                                                <div id="imageCard" >
                                                    {details.img.map((car) => (
                                                        <Container
                                                            key={car.id}
                                                            sx={{
                                                                visibility: (car.id === counterImageBefore) ? 'visible' : 'hidden',
                                                            }}
                                                        >
                                                            {
                                                                (car.imageUrl)
                                                                &&
                                                                <Image
                                                                    cloudName="the-kings-company"
                                                                    publicId={car.imageUrl}
                                                                    alt='Product'
                                                                />
                                                            }
                                                        </Container>
                                                    ))}

                                                </div>

                                            </>
                                        }


                                        <div id='arrowsContainer'>

                                            {
                                                (sm)
                                                &&
                                                <IconButton
                                                    disabled={(details.img.length === 0 || details.img.length === 1 || counterImageBefore <= 1)}
                                                    color="primary"
                                                    component="span"
                                                    onClick={() => setCounterImageBefore(counterImageBefore - 1)}
                                                >
                                                    <ArrowLeftIcon id='ArrowIcon' />
                                                </IconButton>
                                            }

                                            <IconButton
                                                disabled={(details.img.length === 0 || details.img.length === 1 || counterImageBefore >= 5 || counterImageBefore >= details.img.length)}
                                                color="primary"
                                                component="span"
                                                onClick={() => setCounterImageBefore(counterImageBefore + 1)}
                                            >
                                                <ArrowRightIcon id='ArrowIcon' />
                                            </IconButton>

                                        </div>

                                    </Container>

                                </Container>
                            </>
                        }
                        {
                            (action === 'UPDATE' && (type === 'PRODUCT' || type === 'BIN-PRODUCT'))
                            &&
                            <>
                                <TabNavRecordModal
                                    setProductUpdate={setProductUpdate}
                                    productUpdate={productUpdate}
                                />

                                {

                                    (productUpdate === 0)
                                        ?
                                        <Container id='detailsContainer'>

                                            <ListItemText id='name' primary={`Nombre: ${details.before.name}`} />
                                            <ListItemText id='category' primary={`Categoria: ${details.before.category.name}`} />
                                            <ListItemText id='price' primary={`Precio: $${new Intl.NumberFormat('es-IN').format(details.before.price)}`} />
                                            <ListItemText id='quantity' primary={`Cantidad: ${details.before.quantity}`} />
                                            <ListItemText id='description' primary={`Descripción: ${details.before.description}`} />

                                            <Container id='containerImage'>

                                                {
                                                    (!sm)
                                                    &&
                                                    <IconButton
                                                        disabled={(details.before.img.length === 0 || details.before.img.length === 1 || counterImageBefore <= 1)}
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => setCounterImageBefore(counterImageBefore - 1)}
                                                    >
                                                        <ArrowLeftIcon id='ArrowIcon' />
                                                    </IconButton>
                                                }

                                                {
                                                    (details.before.img === [] || details.before.img.length !== 0)
                                                    &&
                                                    <>

                                                        <div id="imageCard" >
                                                            {details.before.img.map((car) => (
                                                                <Container
                                                                    key={car.id}
                                                                    sx={{
                                                                        visibility: (car.id === counterImageBefore) ? 'visible' : 'hidden',
                                                                    }}
                                                                >
                                                                    {
                                                                        (car.imageUrl)
                                                                        &&
                                                                        <Image
                                                                            cloudName="the-kings-company"
                                                                            publicId={car.imageUrl}
                                                                            alt='Product'
                                                                        />
                                                                    }
                                                                </Container>
                                                            ))}

                                                        </div>

                                                    </>
                                                }

                                                <div id='arrowsContainer'>
                                                    {
                                                        (sm)
                                                        &&
                                                        <IconButton
                                                            disabled={(details.before.img.length === 0 || details.before.img.length === 1 || counterImageBefore <= 1)}
                                                            color="primary"
                                                            component="span"
                                                            onClick={() => setCounterImageBefore(counterImageBefore - 1)}
                                                        >
                                                            <ArrowLeftIcon id='ArrowIcon' />
                                                        </IconButton>
                                                    }

                                                    <IconButton
                                                        disabled={(details.before.img.length === 0 || details.before.img.length === 1 || counterImageBefore >= 5 || counterImageBefore >= details.before.img.length)}
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => setCounterImageBefore(counterImageBefore + 1)}
                                                    >
                                                        <ArrowRightIcon id='ArrowIcon' />
                                                    </IconButton>
                                                </div>

                                            </Container>
                                        </Container>
                                        :
                                        <Container id='detailsContainer'>

                                            <ListItemText id='name' primary={`Nombre: ${details.after.name}`} />
                                            <ListItemText id='category' primary={`Categoria: ${details.after.category.name}`} />
                                            <ListItemText id='price' primary={`Precio: $${new Intl.NumberFormat('es-IN').format(details.after.price)}`} />
                                            <ListItemText id='quantity' primary={`Cantidad: ${details.after.quantity}`} />
                                            <ListItemText id='description' primary={`Descripción: ${details.after.description}`} />

                                            <Container id='containerImage'>

                                                {
                                                    (!sm)
                                                    &&
                                                    <IconButton
                                                        disabled={(details.after.img.length === 0 || details.after.img.length === 1 || counterImageAfter <= 1)}
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => setCounterImageAfter(counterImageAfter - 1)}
                                                    >
                                                        <ArrowLeftIcon id='ArrowIcon' />
                                                    </IconButton>
                                                }

                                                {
                                                    (details.after.img === [] || details.after.img.length !== 0)
                                                    &&
                                                    <>

                                                        <div id="imageCard" >
                                                            {details.after.img.map((car) => (
                                                                <Container
                                                                    key={car.id}
                                                                    sx={{
                                                                        visibility: (car.id === counterImageAfter) ? 'visible' : 'hidden',
                                                                    }}
                                                                >
                                                                    {
                                                                        (car.imageUrl)
                                                                        &&
                                                                        <Image
                                                                            cloudName="the-kings-company"
                                                                            publicId={car.imageUrl}
                                                                            alt='Product'
                                                                        />
                                                                    }
                                                                </Container>
                                                            ))}

                                                        </div>

                                                    </>
                                                }

                                                <div id='arrowsContainer'>
                                                    {
                                                        (sm)
                                                        &&
                                                        <IconButton
                                                            disabled={(details.after.img.length === 0 || details.after.img.length === 1 || counterImageAfter <= 1)}
                                                            color="primary"
                                                            component="span"
                                                            onClick={() => setCounterImageAfter(counterImageAfter - 1)}
                                                        >
                                                            <ArrowLeftIcon id='ArrowIcon' />
                                                        </IconButton>
                                                    }

                                                    <IconButton
                                                        disabled={(details.after.img.length === 0 || details.after.img.length === 1 || counterImageAfter >= 5 || counterImageAfter >= details.after.img.length)}
                                                        color="primary"
                                                        component="span"
                                                        onClick={() => setCounterImageAfter(counterImageAfter + 1)}
                                                    >
                                                        <ArrowRightIcon id='ArrowIcon' />
                                                    </IconButton>
                                                </div>


                                            </Container>
                                        </Container>
                                }


                            </>
                        }
                        {
                            (action !== 'UPDATE' && (type === 'USER' || type === 'BIN-USER'))
                            &&
                            <>
                                <h4>Details</h4>

                                <Container id='detailsContainer'>

                                    <ListItemText id='name' primary={`Nombre: ${name}`} />
                                    <ListItemText id='email' primary={`Email: ${details.email}`} />
                                    <ListItemText id='price' primary={`Google: ${details.google}`} />
                                    <ListItemText id='quantity' primary={`Rol: ${details.role}`} />

                                </Container>
                            </>
                        }

                        {
                            (action === 'UPDATE' && (type === 'USER' || type === 'BIN-USER'))
                            &&
                            <>
                                <TabNavRecordModal
                                    setProductUpdate={setProductUpdate}
                                    productUpdate={productUpdate}
                                />

                                {

                                    (productUpdate === 0)
                                        ?
                                        <Container id='detailsContainer'>

                                            <ListItemText id='name' primary={`Nombre: ${details.before.name}`} />
                                            <ListItemText id='email' primary={`Email: ${details.before.email}`} />
                                            <ListItemText id='price' primary={`Google: ${details.before.google}`} />
                                            <ListItemText id='quantity' primary={`Rol: ${details.before.role}`} />

                                        </Container>
                                        :
                                        <Container id='detailsContainer'>

                                            <ListItemText id='name' primary={`Nombre: ${details.after.name}`} />
                                            <ListItemText id='email' primary={`Email: ${details.after.email}`} />
                                            <ListItemText id='price' primary={`Google: ${details.after.google}`} />
                                            <ListItemText id='quantity' primary={`Rol: ${details.after.role}`} />

                                        </Container>
                                }


                            </>
                        }
                        <Button
                            id="submitButton"
                            variant="outlined"
                            onClick={handleClose}
                        >Cerrar</Button>
                    </Box>
                </Container>
            </Modal>
        </div>
    );
}