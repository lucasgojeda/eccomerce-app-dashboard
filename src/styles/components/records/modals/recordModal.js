

export const recordModal = (sm, md, lg, xl) => {
    switch (true) {

        case sm:
            return recordModal__smBox();

        case md:
            return recordModal__mdBox();

        case lg:
            return recordModal__lgBox();

        case xl:
            return recordModal__xlBox();

        default:
            break;
    }
}


const recordModal__xlBox = () => ({
    bgcolor: '#fff',
    height: '95vh',
    marginTop: '2.5%',
    borderRadius: '5px',
    textAlign: 'center',
    '& #title': {
        textAlign: 'start',
        fontSize: '20px',
        marginLeft: '4%',
        paddingTop: '2%',
        marginRight: '4%',
        marginBottom: '1%',
        visibility: 'visible'
    },
    h4: {
        fontSize: '15px',
        marginLeft: '2.5%',
        marginTop: '2.5%',
        textAlign: 'start',
    },
    '& #itemsContainer': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
        marginBottom: '2.5%',
    },
    '& #detailsContainer': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
        marginBottom: '2.5%',
    },
    '& .MuiListItemText-root': {
        paddingLeft: '2%',
        textAlign: 'start',
    },
    '& #submitButton': {
        position: 'absolute',
        left: '40%',
        bottom: '5%',
        width: '20%',
        margin: 'auto',
    },
    '& #productImage': {


        width: '30ch',
        height: '30ch',
        objectFit: 'contain',
        margin: 'auto',
        marginTop: '5%',

    },
});

const recordModal__lgBox = () => ({
    bgcolor: '#fff',
    height: '95vh',
    marginTop: '2.5%',
    borderRadius: '5px',
    textAlign: 'center',
    '& #title': {
        textAlign: 'start',
        fontSize: '20px',
        marginLeft: '4%',
        paddingTop: '2%',
        marginRight: '4%',
        marginBottom: '1%',
        visibility: 'visible'
    },
    h4: {
        fontSize: '15px',
        marginLeft: '2.5%',
        marginTop: '2.5%',
        textAlign: 'start',
    },
    '& #itemsContainer': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
        marginBottom: '2.5%',
    },
    '& #description': {
        maxHeight: '10vh',
        overflowY: 'scroll'
    },
    '& #detailsContainer': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
        marginBottom: '2.5%',
    },
    '& .MuiListItemText-root': {
        paddingLeft: '2%',
        textAlign: 'start',
    },
    '& #submitButton': {
        position: 'absolute',
        left: '40%',
        bottom: '5%',
        width: '20%',
        margin: 'auto',
    },
    '& #containerImage': {
        display: 'flex',
        flexWrap: 'wrap',

    },
    '& #ArrowIcon': {

        fontSize: '50px',


    },
    '& #imageCard': {
        margin: 'auto',
        marginTop: '2.5%',
        width: '20ch',
        height: '20ch',
        img: {
            position: 'absolute',
            left: '41%',
            width: '20ch',
            height: '20ch',
            objectFit: 'contain',
        }
    },
});

const recordModal__mdBox = () => ({
    bgcolor: '#fff',
    height: '95vh',
    marginTop: '2.5%',
    borderRadius: '5px',
    textAlign: 'center',
    '& #title': {
        textAlign: 'start',
        fontSize: '25px',
        marginLeft: '4%',
        paddingTop: '2%',
        marginRight: '4%',
        marginBottom: '1%',
        visibility: 'visible'
    },
    h4: {
        fontSize: '15px',
        marginLeft: '2.5%',
        marginTop: '2.5%',
        textAlign: 'start',
    },
    '& #itemsContainer': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
        marginBottom: '2.5%',
    },
    '& #description': {
        maxHeight: '10vh',
        overflowY: 'scroll'
    },
    '& #detailsContainer': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
        marginBottom: '2.5%',
    },
    '& .MuiListItemText-root': {
        paddingLeft: '2%',
        textAlign: 'start',
    },
    '& #submitButton': {
        position: 'absolute',
        left: '40%',
        bottom: '5%',
        width: '20%',
        margin: 'auto',
    },
    '& #containerImage': {
        display: 'flex',
        flexWrap: 'wrap',

    },
    '& #ArrowIcon': {

        fontSize: '50px',


    },
    '& #imageCard': {
        margin: 'auto',
        marginTop: '2.5%',
        width: '20ch',
        height: '20ch',
        img: {
            position: 'absolute',
            left: '40.5%',
            width: '20ch',
            height: '20ch',
            objectFit: 'contain',
        }
    },
});

const recordModal__smBox = () => ({
    position: 'absolute',
    left: 0,
    bgcolor: '#fff',
    height: '100vh',
    width: '100vw',
    textAlign: 'center',
    overflowY: 'scroll',
    '& #title': {
        textAlign: 'start',
        fontSize: '25px',
        marginLeft: '4%',
        paddingTop: '2%',
        marginRight: '4%',
        marginBottom: '1%',
        visibility: 'visible'
    },
    h4: {
        fontSize: '15px',
        marginLeft: '2.5%',
        marginTop: '2.5%',
        textAlign: 'start',
    },
    '& #itemsContainer': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
        marginBottom: '2.5%',
    },
    '& #description': {
        maxHeight: '10vh',
        overflowY: 'scroll'
    },
    '& #detailsContainer': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2.5%',
        marginBottom: '2.5%',
    },
    '& #containerImage': {
        display: 'flex',
        flexWrap: 'wrap',
    },
    '& #imageCard': {
        margin: 'auto',
        marginTop: '5%',
        width: '100%',
        height: '30ch',
        img: {
            width: '100%',
            objectFit: 'contain',
        }
    },
    '& .MuiListItemText-root': {
        paddingLeft: '2%',
        textAlign: 'start',
    },
    '& #submitButton': {
        width: '25%',
        margin: 'auto',
    },
    '& #arrowsContainer': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    '& #ArrowIcon': {
        fontSize: '50px',
    },

});



