

export const categoriesModal = (sm, md, lg, xl) => { 
    switch (true) {

        case sm:
            return categoriesModal__smBox();

        case md:
            return categoriesModal__mdBox();

        case lg:
            return categoriesModal__lgBox();

        case xl:
            return categoriesModal__xlBox();

        default:
            break;
    }
}


const categoriesModal__xlBox = () => ({
    bgcolor: '#fff',
    height: '70vh',
    width: '60vh',
    margin: 'auto',
    marginTop: '15%',
    h1: {
        marginTop: '2.5%',
        marginLeft: '2.5%',
        marginBottom: '1.5%',
        fontSize: '20px'
    },
    '& #container': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '5%',
        height: '40vh',
        overflowY: 'scroll'
    },
    '& .MuiMenuItem-root': {
        width: '40ch',
        cursor: 'default',
        ':hover': {
            '& #DeleteIcon': {
                visibility: 'visible',
            },
            '& #EditIcon': {
                visibility: 'visible',
            },
        }
    },
    '& #DeleteIcon': {
        position: 'absolute',
        right: 0,
        marginRight: '2%',
        fontSize: '20px',
        cursor: 'pointer',
        visibility: 'hidden',
    },
    '& #EditIcon': {
        position: 'absolute',
        right: 0,
        marginRight: '10%',
        fontSize: '20px',
        cursor: 'pointer',
        color: 'gray',
        visibility: 'hidden',
    },
    '& #AddIcon': {
        display: 'block',
        margin: 'auto',
        marginTop: '5%',
        paddingTop: '2%',
    },
    '& #submitButton': {
        width: '20%',
        margin: 'auto',
        marginLeft: '40%',
        marginBottom: '2.5%',
        marginTop: '3.5%',
    },
});

const categoriesModal__lgBox = () => ({
    bgcolor: '#fff',
    height: '70vh',
    width: '60vh',
    margin: 'auto',
    marginTop: '15%',
    h1: {
        marginTop: '2.5%',
        marginLeft: '2.5%',
        marginBottom: '1.5%',
        fontSize: '20px'
    },
    '& #container': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '5%',
        height: '40vh',
        overflowY: 'scroll'
    },
    '& .MuiMenuItem-root': {
        width: '40ch',
        cursor: 'default',
        ':hover': {
            '& #DeleteIcon': {
                visibility: 'visible',
            },
            '& #EditIcon': {
                visibility: 'visible',
            },
        }
    },
    '& #DeleteIcon': {
        position: 'absolute',
        right: 0,
        marginRight: '2%',
        fontSize: '20px',
        cursor: 'pointer',
        visibility: 'hidden',
    },
    '& #EditIcon': {
        position: 'absolute',
        right: 0,
        marginRight: '10%',
        fontSize: '20px',
        cursor: 'pointer',
        color: 'gray',
        visibility: 'hidden',
    },
    '& #AddIcon': {
        display: 'block',
        margin: 'auto',
        marginTop: '5%',
        paddingTop: '2%',
    },
    '& #submitButton': {
        width: '20%',
        margin: 'auto',
        marginLeft: '40%',
        marginBottom: '2.5%',
        marginTop: '3.5%',
    },
});

const categoriesModal__mdBox = () => ({
    bgcolor: '#fff',
    height: '70vh',
    width: '60vh',
    margin: 'auto',
    marginTop: '15%',
    h1: {
        marginTop: '2.5%',
        marginLeft: '2.5%',
        marginBottom: '1.5%',
        fontSize: '20px',
        visibility: 'visible'
    },
    '& #container': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '5%',
        height: '40vh',
        overflowY: 'scroll'
    },
    '& .MuiMenuItem-root': {
        width: '40ch',
        cursor: 'default',
        ':hover': {
            '& #DeleteIcon': {
                visibility: 'visible',
            },
            '& #EditIcon': {
                visibility: 'visible',
            },
        }
    },
    '& #DeleteIcon': {
        position: 'absolute',
        right: 0,
        marginRight: '2%',
        fontSize: '20px',
        cursor: 'pointer',
        visibility: 'hidden',
    },
    '& #EditIcon': {
        position: 'absolute',
        right: 0,
        marginRight: '10%',
        fontSize: '20px',
        cursor: 'pointer',
        color: 'gray',
        visibility: 'hidden',
    },
    '& #AddIcon': {
        display: 'block',
        margin: 'auto',
        marginTop: '5%',
        paddingTop: '2%',
    },
    '& #submitButton': {
        width: '20%',
        margin: 'auto',
        marginLeft: '40%',
        marginBottom: '2.5%',
        marginTop: '3.5%',
    },
});

const categoriesModal__smBox = () => ({
    position: 'absolute',
    right: 0,
    bgcolor: '#fff',
    height: '100vh',
    width: '100vw',
    margin: 'auto',
    textAlign: 'center',
    h1: {
        textAlign: 'start',
        marginTop: '2.5%',
        marginLeft: '2.5%',
        marginBottom: '1.5%',
        fontSize: '20px',
        visibility: 'visible'
    },
    '& #container': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '15%',
        height: '40vh',
        overflowY: 'scroll'
    },
    '& .MuiMenuItem-root': {
        borderBottom: '1px solid #B2B6B5',
        width: '90vw',
        cursor: 'default',
        ':hover': {
            bgcolor: '#B2B6B5',
            color: '#fff',
            '& #DeleteIcon': {
                visibility: 'visible',
            },
            '& #EditIcon': {
                visibility: 'visible',
            },
        },
    },
    '& #DeleteIcon': {
        position: 'absolute',
        right: 0,
        marginRight: '2%',
        fontSize: '20px',
        cursor: 'pointer',
        visibility: 'hidden',
    },
    '& #EditIcon': {
        position: 'absolute',
        right: 0,
        marginRight: '10%',
        fontSize: '20px',
        cursor: 'pointer',
        color: 'gray',
        visibility: 'hidden',
    },
    '& #AddIcon': {
        bgcolor: 'transparent',
        display: 'block',
        margin: 'auto',
        marginTop: '10%',
        paddingTop: '2%',
    },
    '& #submitButton': {
        width: '20%',
        margin: 'auto',
        marginBottom: '2.5%',
        marginTop: '15%',
    },

}); 



