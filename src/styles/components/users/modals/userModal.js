

export const userModal = (sm, md, lg, xl) => { 
    switch (true) {

        case sm:
            return userModal__smBox();

        case md:
            return userModal__mdBox();

        case lg:
            return userModal__lgBox();

        case xl:
            return userModal__xlBox();

        default:
            break;
    }
}


const userModal__xlBox = () => ({
    '& .MuiTextField-root': {
        m: 1,
        width: '25ch',
        marginTop: '5%',
    },
    textAlign: 'center',
    bgcolor: '#fff',
    height: '50vh',
    marginTop: '25%',
    borderRadius: '5px',
    '& #title': {
        textAlign: 'start',
        fontSize: '20px',
        paddingTop: '1%',
        borderBottom: '1px solid #B2B6B5',
        marginLeft: '4%',
        marginRight: '4%',
        marginBottom: '2.5%',
        paddingBottom: '1%',
        visibility: 'visible'
    },
    '& #FormControl': {
        m: 1,
        marginTop: '5%',
        width: '25ch',
    },
    '& #submitButton': {
        width: '20%',
        bottom: '2%',
        margin: 'auto',
        marginLeft: '2%',
        marginBottom: '2.5%',
        marginTop: '1.5%',
    },
    '& #container': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
        marginBottom: '2.5%',
    },
});

const userModal__lgBox = () => ({
    '& .MuiTextField-root': {
        m: 1,
        width: '25ch',
        marginTop: '5%',
    },
    textAlign: 'center',
    bgcolor: '#fff',
    height: '50vh',
    marginTop: '25%',
    borderRadius: '5px',
    '& #title': {
        textAlign: 'start',
        fontSize: '20px',
        paddingTop: '1%',
        borderBottom: '1px solid #B2B6B5',
        marginLeft: '4%',
        marginRight: '4%',
        marginBottom: '2.5%',
        paddingBottom: '1%',
        visibility: 'visible'
    },
    '& #FormControl': {
        m: 1,
        marginTop: '5%',
        width: '25ch',
    },
    '& #submitButton': {
        width: '20%',
        margin: 'auto',
        marginLeft: '2%',
        marginBottom: '2.5%',
        marginTop: '1.5%',
    },
    '& #container': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
        marginBottom: '2.5%',
        
    },
});

const userModal__mdBox = () => ({
    '& .MuiTextField-root': {
        m: 1,
        width: '25ch',
        marginTop: '5%',
    },
    textAlign: 'center',
    bgcolor: '#fff',
    height: '50vh',
    marginTop: '25%',
    borderRadius: '5px',
    '& #title': {
        textAlign: 'start',
        fontSize: '20px',
        paddingTop: '1%',
        borderBottom: '1px solid #B2B6B5',
        marginLeft: '4%',
        marginRight: '4%',
        marginBottom: '2.5%',
        paddingBottom: '1%',
        visibility: 'visible'
    },
    '& #FormControl': {
        m: 1,
        marginTop: '5%',
        width: '25ch',
    },
    '& #submitButton': {
        width: '20%',
        bottom: '2%',
        margin: 'auto',
        marginLeft: '2%',
        marginBottom: '2.5%',
        marginTop: '1.5%',
    },
    '& #container': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
        marginBottom: '2.5%',
    },
});

const userModal__smBox = () => ({
    position: 'absolute',
    left: 0,
    overflowY: 'scroll',
    bgcolor: '#fff',
    height: '100vh',
    width: '100vw',
    textAlign: 'center',
    '& #container': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
        marginBottom: '2.5%',
    },
    '& .MuiTextField-root': {
        m: 1,
        width: '100%',
        margin: 'auto',
        marginTop: '7.5%',
    },
    '& #title': {
        textAlign: 'start',
        fontSize: '20px',
        paddingTop: '5%',
        paddingBottom: '2.5%',
        borderBottom: '1px solid #B2B6B5',
        marginLeft: '4%',
        marginRight: '4%',
        marginBottom: '2.5%',
        visibility: 'visible'
    },
    '& #FormControl': {
        m: 1,
        margin: 'auto',
        marginTop: '7.5%',
        width: '100%',
    },
    '& #submitButton': {
        width: '25%',
        margin: 'auto',
        marginLeft: '2%',
        marginBottom: '2.5%',
        marginTop: '7.5%',
    },
    
});



