

export const productModal = (sm, md, lg, xl) => {    
    switch (true) {

        case sm:
            return productModal__smBox();

        case md:
            return productModal__mdBox();

        case lg:
            return productModal__lgBox();

        case xl:
            return productModal__xlBox();

        default:
            break;
    }
}


const productModal__xlBox = () => ({
    position: 'absolute',
    left: '17.5%',
    top: '2.5%',
    bgcolor: '#fff',
    width: '40%',
    height: '95vh',
    borderRadius: '5px 0 0 5px',
    borderRight: '1px solid #B2B6B5',
    '& .MuiTextField-root': {
        m: 1,
        width: '25ch',
    },
    '& #container': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
    },
    '& #title': {
        fontSize: '25px',
        paddingTop: '1%',
        borderBottom: '1px solid #B2B6B5',
        marginLeft: '4%',
        marginRight: '4%',
        marginBottom: '2.5%',
        paddingBottom: '1%'
    },
    div: {

        textAlign: 'center',
    },
    '& .products_input-image': {
        position: 'absolute',
        visibility: 'hidden'
    },
    '& #FormControl': {
        m: 1,
        width: '25ch',
    },
    '& #imagePreviewProduct': {
        margin: 'auto',
        marginTop: '2.5%',
        width: '30ch',
        img: {


            width: '30ch',
            height: '30ch',
            objectFit: 'contain',

        }
    },
    '& #NoneImage': {
        position: 'relative',
        width: '30ch',
        height: '30ch',
        objectFit: 'contain',
        border: 'gray 1px dashed',
        ":hover": {
            cursor: 'pointer'
        }
    },
    '& #PhotoCameraIcon': {
        fontSize: '50px',
        color: 'gray',
        marginTop: '40%'
    },
    '& .MuiIconButton-root': {
        marginTop: '25%',
        height: '50px',
        width: '50px'
    },
    '& #containerImage': {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto',
        marginTop: '25%',
    },
    '& #leftArrowIcon': {
        '& 	.MuiSvgIcon-root':{
            fontSize: '50px',
        }
    },
    '& #rightArrowIcon': {
        '& 	.MuiSvgIcon-root':{
            fontSize: '50px',
        }
    },
    '& #iconsContainer': {
        width: '30ch',
        height: '50ch',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    '& #editIcon': {
        marginTop: '-25%',
    },
    '& #cameraIcon': {
        marginTop: '-25%',
    },
    '& #imageCard': {
        margin: 'auto',
        marginTop: '2.5%',
        width: '30ch',
        height: '30ch',
        img: {
            position: 'absolute',
            left: '2.5%',
            width: '30ch',
            height: '30ch',
            objectFit: 'contain',
        }
    },
    '& #descriptionContainer': {
        position: 'absolute',
        left: '100%',
        top: 0,
        bgcolor: '#fff',
        width: '30vw',
        height: '95vh',
        borderRadius: '0 5px 5px 0',
        zIndex: -1,
        '& .description': {
            position: 'relative',
            minHeight: '10vh',
            minWidth: '25vw',
            maxHeight: '80vh',
            maxWidth: '25vw',
            overflowY: 'scroll',
            left: 0,
            padding: '10px',
            marginTop: '2.5vh',
            border: '1px solid #B2B6B5',
            borderRadius: '5px',
            fontFamily: 'Arial',
            fontSize: '16px',
            ':focus': {
                border: '1px solid #B2B6B5',
            }
        },
        '& #saveButton': {
            position: 'relative',
            width: '100px',
            marginTop: '2.5%',
            marginRight: '2.5%',
        },
        '& #closeButton': {
            position: 'relative',
            width: '100px',
            marginTop: '2.5%',
            marginLeft: '2.5%',
        },
    },
});

const productModal__lgBox = () => ({
    position: 'absolute',
    left: '5%',
    top: '2.5%',
    bgcolor: '#fff',
    width: '50%',
    height: '95vh',
    borderRadius: '5px 0 0 5px',
    borderRight: '1px solid #B2B6B5',
    '& .MuiTextField-root': {
        m: 1,
        width: '45%',
    },
    '& #container': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
    },
    '& #title': {
        fontSize: '25px',
        paddingTop: '1%',
        borderBottom: '1px solid #B2B6B5',
        marginLeft: '4%',
        marginRight: '4%',
        marginBottom: '2.5%',
        paddingBottom: '1%'
    },
    div: {

        textAlign: 'center',
    },
    '& .products_input-image': {
        position: 'absolute',
        visibility: 'hidden'
    },
    '& #FormControl': {
        m: 1,
        width: '45%',
    },
    '& #imagePreviewProduct': {
        margin: 'auto',
        marginTop: '2.5%',
        width: '30ch',
        img: {


            width: '30ch',
            height: '30ch',
            objectFit: 'contain',

        }
    },
    '& #NoneImage': {
        position: 'relative',
        width: '30ch',
        height: '30ch',
        objectFit: 'contain',
        border: 'gray 1px dashed',
        ":hover": {
            cursor: 'pointer'
        }
    },
    '& #PhotoCameraIcon': {
        fontSize: '50px',
        color: 'gray',
        marginTop: '40%'
    },
    '& .MuiIconButton-root': {
        marginTop: '25%',
        height: '50px',
        width: '50px'
    },
    '& #containerImage': {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto',
        marginTop: '25%',
    },
    '& #leftArrowIcon': {
        position: 'absolute',
        left: '10%',
        top: '51.125%',
        '& 	.MuiSvgIcon-root':{
            fontSize: '50px',
        }
    },
    '& #rightArrowIcon': {
        position: 'absolute',
        left: '90%',
        top: '51.125%',
        '& 	.MuiSvgIcon-root':{
            fontSize: '50px',
        }
    },
    '& #iconsContainer': {
        width: '30ch',
        height: '50ch',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    '& #editIcon': {
        marginTop: '-25%',
    },
    '& #cameraIcon': {
        marginTop: '-25%',
    },
    '& #imageCard': {
        margin: 'auto',
        marginTop: '2.5%',
        width: '30ch',
        height: '30ch',
        img: {
            position: 'absolute',
            left: '5%',
            width: '30ch',
            height: '30ch',
            objectFit: 'contain',
        }
    },
    '& #descriptionContainer': {
        position: 'absolute',
        left: '100%',
        top: 0,
        paddingRight: '2.5%',
        bgcolor: '#fff',
        width: '30vw',
        height: '95vh',
        borderRadius: '0 5px 5px 0',
        zIndex: -1,
        '& .description': {
            position: 'relative',
            minHeight: '10vh',
            minWidth: '25vw',
            maxHeight: '80vh',
            maxWidth: '25vw',
            overflowY: 'scroll',
            left: 0,
            padding: '10px',
            marginTop: '2.5vh',
            border: '1px solid #B2B6B5',
            borderRadius: '5px',
            fontFamily: 'Arial',
            fontSize: '16px',
            ':focus': {
                border: '1px solid #B2B6B5',
            }
        },
        '& #saveButton': {
            position: 'relative',
            width: '100px',
            marginTop: '2.5%',
            marginRight: '2.5%',
        },
        '& #closeButton': {
            position: 'relative',
            width: '100px',
            marginTop: '2.5%',
            marginLeft: '2.5%',
        },
    },
});

const productModal__mdBox = () => ({
    bgcolor: '#fff',
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    objectFit: 'contain',
    '& .MuiTextField-root': {
        m: 2,
        width: '40%',
    },
    '& #container': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
    },
    '& #title': {
        fontSize: '25px',
        paddingTop: '2%',
        borderBottom: '1px solid #B2B6B5',
        marginLeft: '4%',
        marginRight: '4%',
        marginBottom: '2.5%',
        paddingBottom: '2%'
    },
    div: {

        textAlign: 'center',
    },
    '& .products_input-image': {
        position: 'absolute',
        visibility: 'hidden'
    },
    '& #FormControl': {
        m: 2,
        width: '40%',
    },
    '& #imagePreviewProduct': {
        margin: 'auto',
        marginTop: '2.5%',
        width: '30ch',
        img: {
            width: '30ch',
            height: '30ch',
            objectFit: 'contain',
        }
    },
    '& #NoneImage': {
        position: 'relative',
        width: '30ch',
        height: '30ch',
        objectFit: 'contain',
        border: 'gray 1px dashed',
        ":hover": {
            cursor: 'pointer'
        }
    },
    '& #PhotoCameraIcon': {
        fontSize: '50px',
        color: 'gray',
        marginTop: '40%'
    },
    '& .MuiIconButton-root': {
        marginTop: '25%',
        height: '50px',
        width: '50px'
    },
    '& #containerImage': {
        margin: 'auto',
        marginTop: '15%',
    },
    '& #leftArrowIcon': {
        position: 'absolute',
        left: '10%',
        top: '51.125%',
        '& 	.MuiSvgIcon-root':{
            fontSize: '50px',
        }
    },
    '& #rightArrowIcon': {
        position: 'absolute',
        left: '90%',
        top: '51.125%',
        '& 	.MuiSvgIcon-root':{
            fontSize: '50px',
        }
    },
    '& #iconsContainer': {
        width: '30ch    ',
        height: '50ch',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    '& #editIcon': {
        marginTop: '-25%',
    },
    '& #cameraIcon': {
        marginTop: '-25%',
    },
    '& #imageCard': {
        margin: 'auto',
        marginTop: '2.5%',
        width: '30ch',
        height: '30ch',
        img: {
            position: 'absolute',
            left: '5%',
            width: '30ch',
            height: '30ch',
            objectFit: 'contain',
        }
    },
    '& #descriptionContainer': {
        bgcolor: '#fff',
        width: '100%',
        height: 'auto',
        marginTop: '10%',
        '& .description': {
            position: 'relative',
            minHeight: '10vh',
            minWidth: '90%',
            maxHeight: '100vh',
            maxWidth: '90%',
            overflowY: 'scroll',
            left: 0,
            padding: '10px',
            marginTop: '2.5vh',
            border: '1px solid #B2B6B5',
            borderRadius: '5px',
            fontFamily: 'Arial',
            fontSize: '16px',
            ':focus': {
                border: '1px solid #B2B6B5',
            }
        },
        '& #saveButton': {
            position: 'relative',
            width: '100px',
            marginTop: '2.5%',
            marginBottom: '2.5%',
            marginRight: '2.5%',
        },
        '& #closeButton': {
            position: 'relative',
            width: '100px',
            marginTop: '2.5%',
            marginBottom: '2.5%',
            marginLeft: '2.5%',
        },
    },
});

const productModal__smBox = () => ({
    bgcolor: '#fff',
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '& .MuiTextField-root': {
        m: 2,
        width: '90%',
        objectFit: 'contain',
        overflow: 'cover',
    },
    '& #container': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
    },
    '& #title': {
        fontSize: '25px',
        paddingTop: '2%',
        borderBottom: '1px solid #B2B6B5',
        marginLeft: '4%',
        marginRight: '4%',
        marginBottom: '2.5%',
        paddingBottom: '2%'
    },
    div: {

        textAlign: 'center',
    },
    '& .products_input-image': {
        position: 'absolute',
        visibility: 'hidden'
    },
    '& #FormControl': {
        m: 2,
        width: '90%',
        objectFit: 'contain',
        overflow: 'cover',
    },
    '& #imagePreviewProduct': {
        margin: 'auto',
        marginTop: '2.5%',
        width: '100%',
        img: {
            width: '100%',
            height: 'auto',
            objectFit: 'contain',

        }
    },
    '& #NoneImage': {
        position: 'relative',
        width: '30ch',
        height: '30ch',
        objectFit: 'contain',
        border: 'gray 1px dashed',
        ":hover": {
            cursor: 'pointer'
        }
    },
    '& #PhotoCameraIcon': {
        fontSize: '50px',
        color: 'gray',
        marginTop: '40%'
    },
    '& .MuiIconButton-root': {
        marginTop: '25%',
        height: '50px',
        width: '50px'
    },
    '& #containerImage': {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto',
        marginTop: '15%',
    },
    '& #arrowsContainer': {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
    },
    '& #leftArrowIcon': {
        '& 	.MuiSvgIcon-root':{
            fontSize: '50px',
        }
    },
    '& #rightArrowIcon': {
        '& 	.MuiSvgIcon-root':{
            fontSize: '50px',
        }
    },
    '& #iconsContainer': {
        width: '30ch',
        height: '50ch',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    '& #editIcon': {
        marginTop: '-25%',
    },
    '& #cameraIcon': {
        marginTop: '-25%',
    },
    '& #imageCard': {
        margin: 'auto',
        marginTop: '2.5%',
        width: '30ch',
        height: '30ch',
        img: {
            position: 'absolute',
            left: 0,
            width: '30ch',
            height: '30ch',
            objectFit: 'contain',
        }
    },
    '& #descriptionContainer': {
        bgcolor: '#fff',
        width: '100%',
        height: 'auto',
        marginTop: '10%',
        '& .description': {
            position: 'relative',
            minHeight: '10vh',
            minWidth: '90%',
            maxHeight: '100vh',
            maxWidth: '90%',
            overflowY: 'scroll',
            left: 0,
            padding: '10px',
            marginTop: '2.5vh',
            border: '1px solid #B2B6B5',
            borderRadius: '5px',
            fontFamily: 'Arial',
            fontSize: '16px',
            ':focus': {
                border: '1px solid #B2B6B5',
            }
        },
        '& #saveButton': {
            position: 'relative',
            width: '100px',
            marginTop: '2.5%',
            marginBottom: '2.5%',
            marginRight: '2.5%',
        },
        '& #closeButton': {
            position: 'relative',
            width: '100px',
            marginTop: '2.5%',
            marginBottom: '2.5%',
            marginLeft: '2.5%',
        },
    },
});



