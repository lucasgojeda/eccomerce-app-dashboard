import React, { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import ImageCropDialog from "../../ui/imageCrop/ImageCropDialog";

import { verifyProductFields } from '../../../helpers/verifyProductFields';
import { uploadImageToCloudinary } from '../../../helpers/uploadCloudinary';

import { useCategoriesStore, useProductsStore, useUiStore } from '../../../hooks';

import '../../../styles/components/products/modals/_productModal.scss';


const initEvent = {
    name: 'Producto',
    price: '3000',
    description: 'Esta es una descripción',
    img: [
        {
            croppedImageUrl: null,
            id: 1,
            imageUrl: 'https://res.cloudinary.com/the-kings-company/image/upload/v1660157889/u34lsffp3rn1wu7n6baf.jpg'
        },
        {
            croppedImageUrl: null,
            id: 2,
            imageUrl: 'https://res.cloudinary.com/the-kings-company/image/upload/v1658606573/rfhvwkwszxqtaar4njmh.jpg'
        },
        {
            croppedImageUrl: null,
            id: 3,
            imageUrl: 'https://res.cloudinary.com/the-kings-company/image/upload/v1636394498/samples/ecommerce/analog-classic.jpg'
        },
        {
            croppedImageUrl: null,
            id: 4,
            imageUrl: 'https://res.cloudinary.com/the-kings-company/image/upload/v1636394509/samples/ecommerce/car-interior-design.jpg'
        },
        {
            croppedImageUrl: null,
            id: 5,
            imageUrl: 'https://res.cloudinary.com/the-kings-company/image/upload/v1636394510/samples/ecommerce/leather-bag-gray.jpg'
        },
    ],
    quantity: '123123',
    category: {
        name: 'tecnologia'
    }
}


export const CreateProductModal = () => {

    const imageRef = useRef();

    const { categories } = useCategoriesStore();
    const { productStartAddNew } = useProductsStore();
    const {
        modalProductAdd,
        startUiCloseProductModal,
        startUiCloseProgressBackdrop,
        startUiOpenCategoriesModal,
        startUiOpenDialogFields,
        startUiOpenErrorAlert,
        startUiOpenProgressBackdrop,
    } = useUiStore();

    const [formValues, setFormValues] = useState(initEvent);
    const { name, price, quantity, category, description } = formValues;

    const [cars, setCars] = useState([]);
    const [counterImage, setCounterImage] = useState(1);
    const [selectedCar, setSelectedCar] = useState(null);

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    const onCancel = () => {
        setSelectedCar(null);
    };

    const setCroppedImageFor = (id, crop, zoom, aspect, croppedImageUrl) => {
        const newCarsList = [...cars];
        const carIndex = cars.findIndex((x) => x.id === id);
        const car = cars[carIndex];
        const newCar = { ...car, croppedImageUrl, crop, zoom, aspect };
        newCarsList[carIndex] = newCar;
        setCars(newCarsList);
        setSelectedCar(null);
    };

    const resetImage = (id) => {
        setCroppedImageFor(id);
    };

    const handleProductInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        })


    }

    const handleCategoryInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            category: {
                name: target.value
            }
        })

    }

    const handleChangeImageFile = (car) => {

        const newCars = cars.filter(e => (e.id !== car.id) && e)


        setCars([
            ...newCars,
            {
                ...car,
                flag: 'true'
            }
        ])

        handleImageFile();
    }

    const handleClose = () => {

        setFormValues(initEvent);
        setCars([]);
        startUiCloseProductModal();
        setCounterImage(1);
    };

    const handleImageFile = (e) => {
        imageRef.current.click();
    }

    const handleNewCategory = async () => {

        setFormValues({
            ...formValues,
            category: ''
        });

        startUiOpenCategoriesModal();
    }

    const handelChangeImage = (e) => {

        e.preventDefault();

        if (e.target.files[0]) {


            let reader = new FileReader();

            reader.readAsDataURL(e.target.files[0]);

            reader.onload = () => {

                const base64 = reader.result;

                var arrayAuxiliar = [];

                arrayAuxiliar = base64.split(',');


                if (cars.filter(e => e.flag === 'true')[0]?.flag === 'true') {


                    const oldCar = cars.filter(e => (e.flag === 'true') && e)

                    const newCar = {
                        id: oldCar[0].id,
                        imageUrl: arrayAuxiliar,
                        croppedImageUrl: null,
                    }
                    
                    let sortedCars = [...cars.filter(e => e.flag !== 'true'), newCar];
                    
                    setCars(sortedCars.sort((a, b) => a.id - b.id));

                    return;
                }

                if (cars.length >= 5) {
                    return console.log('Solo se pueden hasta 5 imagenes');
                }

                setCars([
                    ...cars,
                    {
                        id: (cars.length >= 1) ? cars.length + 1 : 1,
                        imageUrl: arrayAuxiliar,
                        croppedImageUrl: null,
                    }
                ])

            }

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {



            const errors = verifyProductFields(formValues, cars);


            if (errors.length >= 1) {

                startUiOpenDialogFields(errors);

            } else {

                handleClose();

                startUiOpenProgressBackdrop();


                const [one = '', two = '', tree = '', four = '', five = ''] = cars;


                var [oneImage, twoImage, treeImage, fourImage, fiveImage] = await Promise.all([

                    (one !== '') ? uploadImageToCloudinary(one.imageUrl) : '',
                    (two !== '') ? uploadImageToCloudinary(two.imageUrl) : '',
                    (tree !== '') ? uploadImageToCloudinary(tree.imageUrl) : '',
                    (four !== '') ? uploadImageToCloudinary(four.imageUrl) : '',
                    (five !== '') ? uploadImageToCloudinary(five.imageUrl) : '',
                ]);

                const oneNew = {
                    id: 1,
                    imageUrl: oneImage,
                    croppedImageUrl: null
                }
                const twoNew = {
                    id: 2,
                    imageUrl: twoImage,
                    croppedImageUrl: null
                }
                const treeNew = {
                    id: 3,
                    imageUrl: treeImage,
                    croppedImageUrl: null
                }
                const fourNew = {
                    id: 4,
                    imageUrl: fourImage,
                    croppedImageUrl: null
                }
                const fiveNew = {
                    id: 5,
                    imageUrl: fiveImage,
                    croppedImageUrl: null
                }

                let newImages = [
                    (oneNew.imageUrl !== '') && oneNew,
                    (twoNew.imageUrl !== '') && twoNew,
                    (treeNew.imageUrl !== '') && treeNew,
                    (fourNew.imageUrl !== '') && fourNew,
                    (fiveNew.imageUrl !== '') && fiveNew,
                ].filter(e => (e !== false));

                newImages.sort((a, b) => a.id - b.id);

                const data = formValues;
                data.img = newImages;

                productStartAddNew(data);

            }
        } catch (error) {
            startUiCloseProgressBackdrop();
            startUiOpenErrorAlert('Error trying to create the product! Talk to developer');
            console.log(error);
        }
    }


    return (



        <div>
            <Modal
                open={modalProductAdd}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container className='mainProductModalContainer'>
                    <Box
                        component="form"
                        sx={{
                            position: 'relative',
                            paddingRight: '7.5%',
                            width: '100%',
                            margin: 0,
                            padding: 0,
                        }}
                        noValidate
                        autoComplete="off"
                    >


                        <Typography variant='body2' id='title'>
                            Create new product
                        </Typography>

                        <Container id='container'>

                            <div>

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Name"
                                    name='name'
                                    value={name}
                                    onChange={handleProductInputChange}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    type="number"
                                    label="Price"
                                    name='price'
                                    value={price}
                                    onChange={handleProductInputChange}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    type="number"
                                    label="Quantity"
                                    name='quantity'
                                    value={quantity}
                                    onChange={handleProductInputChange}
                                />

                                <input
                                    type="file"
                                    className="products_input-image"
                                    placeholder="Image"
                                    ref={imageRef}
                                    name='img'
                                    value={''}
                                    onChange={handelChangeImage}
                                />




                                <FormControl id="FormControl">

                                    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Category"
                                        value={category.name || ''}
                                        onChange={handleCategoryInputChange}
                                    >
                                        {
                                            categories.map(e => (
                                                <MenuItem key={e._id} name={e.name} value={e.name}>{e.name}</MenuItem>
                                            ))
                                        }
                                        <MenuItem value='' onClick={handleNewCategory} >Editar categorias<AddIcon /></MenuItem>
                                    </Select>

                                </FormControl>

                                {/* <Button
                                    variant="outlined"
                                    value="Upload Image"
                                    onClick={handleImageFile}
                                >Upload Image</Button> */}






                                <Container id='containerImage'>

                                    {
                                        (!sm)
                                        &&
                                        <IconButton
                                            id='leftArrowIcon'
                                            disabled={(cars.length === 0 || cars.length === 1 || counterImage <= 1)}
                                            color="primary"
                                            sx={{
                                                marginLeft: '-3.5vw'
                                            }}
                                            component="span"
                                            onClick={() => setCounterImage(counterImage - 1)}
                                        >
                                            <ArrowLeftIcon />
                                        </IconButton>
                                    }


                                    {selectedCar ? (
                                        <ImageCropDialog
                                            id={selectedCar.id}
                                            imageUrl={selectedCar.imageUrl}
                                            cropInit={selectedCar.crop}
                                            zoomInit={selectedCar.zoom}
                                            aspectInit={selectedCar.aspect}
                                            onCancel={onCancel}
                                            setCroppedImageFor={setCroppedImageFor}
                                            resetImage={resetImage}
                                        />
                                    ) : null}

                                    {
                                        (cars.length !== 0)
                                            ?
                                            <>

                                                <div id="imageCard" >
                                                    {cars.map((car) => (
                                                        <Container
                                                            key={car.id}
                                                            sx={{
                                                                visibility: (car.id === counterImage) ? 'visible' : 'hidden',
                                                                position: 'absolute'
                                                            }}
                                                        >
                                                            <img

                                                                src={car.croppedImageUrl ? car.croppedImageUrl : car.imageUrl}
                                                                alt=""
                                                                onClick={() => {
                                                                    console.log(car);
                                                                    setSelectedCar(car);
                                                                }}
                                                            />
                                                            <Container id='iconsContainer'>
                                                                <IconButton
                                                                    id='editIcon'
                                                                    color="primary"
                                                                    component="span"
                                                                    onClick={() => handleChangeImageFile(car)}
                                                                >
                                                                    <EditIcon />
                                                                </IconButton>
                                                                <IconButton
                                                                    id='cameraIcon'
                                                                    color="inherit"
                                                                    component="span"
                                                                    onClick={handleImageFile}
                                                                >
                                                                    <PhotoCameraIcon />
                                                                </IconButton>
                                                            </Container>
                                                        </Container>
                                                    ))}

                                                </div>

                                            </>
                                            :
                                            <div id="imageCard" >
                                                <div onClick={handleImageFile} id='NoneImage'><PhotoCameraIcon id='PhotoCameraIcon' /></div>
                                            </div>
                                    }


                                    <div id='arrowsContainer'>

                                        {
                                            (sm)
                                            &&
                                            <IconButton
                                                id='leftArrowIcon'
                                                disabled={(cars.length === 0 || cars.length === 1 || counterImage <= 1)}
                                                color="primary"
                                                component="span"
                                                onClick={() => setCounterImage(counterImage - 1)}
                                            >
                                                <ArrowLeftIcon />
                                            </IconButton>
                                        }


                                        <IconButton
                                            id='rightArrowIcon'
                                            disabled={(cars.length === 0 || cars.length === 1 || counterImage >= 5 || counterImage >= cars.length)}
                                            color="primary"
                                            component="span"
                                            onClick={() => setCounterImage(counterImage + 1)}
                                        >
                                            <ArrowRightIcon />
                                        </IconButton>

                                    </div>

                                </Container>





                                {/* <div id="imagePreviewProduct">

                                {
                                    (loadImage !== '') ? <img alt='Product' src={`${loadImage}`} /> : <div onClick={handleImageFile} id='NoneImage'><PhotoCameraIcon id='PhotoCameraIcon' /></div>
                                }
                            </div> */}
                            </div>
                        </Container>

                    </Box>
                    <Box id='descriptionContainer'>

                        <Container>

                            <div>
                                <TextareaAutosize
                                    className="description"
                                    required
                                    id="outlined-required"
                                    label="Descripción"
                                    name='description'
                                    value={description}
                                    onChange={handleProductInputChange}
                                />

                            </div>

                            <Button
                                type="submit"
                                id="saveButton"
                                variant="contained"
                                onClick={handleSubmit}
                            >Save</Button>

                            <Button
                                id="closeButton"
                                variant="outlined"
                                onClick={handleClose}
                            >Cancel</Button>
                        </Container>
                    </Box>
                </Container>
            </Modal>
        </div>
    );
}
