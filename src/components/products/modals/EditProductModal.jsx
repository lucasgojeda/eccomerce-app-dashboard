import React, { useEffect, useRef, useState } from 'react';

import { Image } from 'cloudinary-react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import ImageCropDialog from "../../ui/imageCrop/ImageCropDialog";

import { verifyProductFields } from '../../../helpers/verifyProductFields';
import { uploadImageToCloudinary } from '../../../helpers/uploadCloudinary';

import { useCategoriesStore, useProductsStore, useUiStore } from '../../../hooks';

import '../../../styles/components/products/modals/_productModal.scss';


const initEvent = {
    name: '',
    price: '',
    description: '',
    img: '',
    quantity: '',
    category: {
        name: ''
    }
}


export const EditProductModal = () => {

    const imageRef = useRef();

    const { categories } = useCategoriesStore();
    const {
        activeProduct,
        productStartUpdated,
        startClearActiveProduct,
    } = useProductsStore();
    const {
        modalProductEdit,
        startUiCloseProductModalEdit,
        startUiCloseProgressBackdrop,
        startUiOpenDialogFields,
        startUiOpenErrorAlert,
        startUiOpenProgressBackdrop,
        startUiOpenCategoriesModal,
    } = useUiStore();

    const [categoryValue, setCategoryValue] = useState('');
    const [formValues, setFormValues] = useState(initEvent);

    const [cars, setCars] = useState([]);
    const [counterImage, setCounterImage] = useState(1);
    const [selectedCar, setSelectedCar] = useState(null);


    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));



    useEffect(() => {

        if (activeProduct) {

            setFormValues(activeProduct);
            setCategoryValue(activeProduct.category.name)
            setCars(activeProduct.img)

        } else {
            setFormValues(initEvent);
        }

    }, [activeProduct, setFormValues]);


    useEffect(() => {

        setFormValues({
            ...formValues,
            category: {
                ...category,
                name: categoryValue
            }
        })


    }, [categoryValue]);



    const { name, price, quantity, category, description } = formValues;

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
        startClearActiveProduct();
        setCars([]);
        startUiCloseProductModalEdit();
        setCategoryValue('');
        setCounterImage(1);

    };

    const handleImageFile = (e) => {
        imageRef.current.click();
    }

    const handleSelectInput = (e) => {

        const value = e.target.value;

        setCategoryValue(value)

    }

    const handleNewCategory = async () => {

        setCategoryValue('');

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


                // setLoadImage(arrayAuxiliar)

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

                productStartUpdated(data);

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
                open={modalProductEdit}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container className='mainProductModalContainer'>
                    <Box
                        sx={{
                            position: 'relative',
                            paddingRight: '7.5%',
                            width: '100%',
                            margin: 0,
                            padding: 0,
                        }}
                        component="form"
                        noValidate
                        autoComplete="off"
                    >

                        <Typography variant='body2' id='title'>
                            Edit product
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

                                {/* <Button
                                    variant="outlined"
                                    value="Upload Image"
                                    onClick={handleImageFile}
                                >Change Image</Button> */}


                                <FormControl id="FormControl">

                                    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Category"
                                        value={categoryValue || ''}
                                        onChange={handleSelectInput}
                                    >
                                        {
                                            categories.map(e => (
                                                <MenuItem key={e._id} name={e.name} value={e.name}>{e.name}</MenuItem>
                                            ))
                                        }
                                        <MenuItem
                                            onClick={handleNewCategory}>New category<AddIcon />
                                        </MenuItem>
                                    </Select>

                                </FormControl>


                                <Container id='containerImage'>

                                    {
                                        (!sm)
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
                                                            {
                                                                (car.imageUrl !== String)
                                                                    ?
                                                                    <img
                                                                        alt='Product'
                                                                        src={car.croppedImageUrl ? car.croppedImageUrl : car.imageUrl}
                                                                        onClick={() => {
                                                                            console.log(car);
                                                                            setSelectedCar(car);
                                                                        }}
                                                                    />
                                                                    :
                                                                    <Image
                                                                        cloudName="the-kings-company"
                                                                        publicId={car.croppedImageUrl ? car.croppedImageUrl : car.imageUrl}
                                                                        alt='Product'
                                                                        onClick={() => {
                                                                            console.log(car);
                                                                            setSelectedCar(car);
                                                                        }}
                                                                    />
                                                            }
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


                                        (formValues.img !== '' && loadImage === null && formValues.img)
                                        &&
                                        <Image cloudName="the-kings-company" publicId={formValues.img} alt='Product' />

                                    }
                                    {
                                        (loadImage !== null)
                                        &&
                                        <img alt='Product' src={`${loadImage}`} />
                                    }
                                    {
                                        (loadImage === null)
                                        &&
                                        <div onClick={handleImageFile} id='NoneImage'><PhotoCameraIcon id='PhotoCameraIcon' /></div>
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
                                    variant='body2'
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
            </Modal >
        </div >
    );
}
