import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const productsTable = (sm, md, lg, xl) => {
    switch (true) {

        case sm:
            return productsTable__smBox();

        case md:
            return productsTable__mdBox();

        case lg:
            return productsTable__lgBox();

        case xl:
            return productsTable__xlBox();

        default:
            break;
    }
}


const productsTable__xlBox = () => ({
    '& #searchAndFilter': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '90%',
        height: '10vh',
        marginTop: '11vh',
        marginLeft: '8.5vw',
        '& #closeIcon': {
            position: 'absolute',
            top: '1vh',
            left: '30vw',
        },
        '& #FormControl': {
            m: 1,
            width: '25ch',
            backgroundColor: '#fff',
            '& .MuiInputBase-input': {
                height: '0.5vh',
            },
        },
    },
    '& #tableContainer': {
        width: '90%',
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto',
        marginLeft: '8.5vw',
        padding: '0',
        border: '1px solid rgba(1, 1, 1, 0.25)',
    },
    '& #containerRows': {
        width: '100%',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        padding: '0',
        overflowY: 'scroll',
        overflowX: 'hidden',
    },
    '& #rowsDiv': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2px',
        padding: '0 2.5% 0 2.5%',
        width: '100%',
        height: '7.5ch',
        backgroundColor: '#fff',
        ':hover': {
            '& #menuIconDiv': {
                visibility: 'visible',
            },
        }
    },
    '& #headerDiv': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(1, 1, 1, 0.25)',
        overflowX: 'hidden',
        padding: '0 4vw 0 2.5%',
        width: '100%',
        height: '7.5ch',
        backgroundColor: '#2980B9',
        color: '#fff',
        ':hover': {
            '& #menuIconDiv': {
                visibility: 'visible',
            },
        }
    },
    '& #nameItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '20ch',
        height: '7.5ch',
    },
    '& #priceItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '7.5ch',
        height: '7.5ch',
    },
    '& #quantityItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '7.5ch',
        height: '7.5ch',
    },
    '& #categoryItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10ch',
        height: '7.5ch',
    },
    '& #userItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20ch',
        height: '7.5ch',
    },
    '& #menuIconDiv': {
        visibility: 'hidden',
    },
    '& #paginationDiv': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        width: '100%',
        height: '6ch',
        padding: '0 4vw 0 2.5%',
        borderRadius: '0 0 5px 5px',
        backgroundColor: '#fff',
        borderTop: '1px solid rgba(1, 1, 1, 0.25)',
    },
});

const productsTable__lgBox = () => ({
    '& #searchAndFilter': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '90%',
        height: '10vh',
        marginTop: '11vh',
        marginLeft: '8.5vw',
        '& #closeIcon': {
            position: 'absolute',
            top: '1vh',
            left: '30vw',
        },
        '& #FormControl': {
            m: 1,
            width: '25ch',
            backgroundColor: '#fff',
            '& .MuiInputBase-input': {
                height: '0.5vh',
            },
        },
    },
    '& #tableContainer': {
        width: '90%',
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto',
        marginLeft: '8.5vw',
        padding: '0',
        border: '1px solid rgba(1, 1, 1, 0.25)',
    },
    '& #containerRows': {
        width: '100%',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        padding: '0',
        overflowY: 'scroll',
        overflowX: 'hidden',
    },
    '& #rowsDiv': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2px',
        padding: '0 2.5% 0 2.5%',
        width: '100%',
        height: '7.5ch',
        backgroundColor: '#fff',
        ':hover': {
            '& #menuIconDiv': {
                visibility: 'visible',
            },
        }
    },
    '& #headerDiv': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(1, 1, 1, 0.25)',
        overflowX: 'hidden',
        padding: '0 4vw 0 2.5%',
        width: '100%',
        height: '7.5ch',
        backgroundColor: '#2980B9',
        color: '#fff',
        ':hover': {
            '& #menuIconDiv': {
                visibility: 'visible',
            },
        }
    },
    '& #nameItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '20ch',
        height: '7.5ch',
    },
    '& #priceItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '7.5ch',
        height: '7.5ch',
    },
    '& #quantityItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '7.5ch',
        height: '7.5ch',
    },
    '& #categoryItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10ch',
        height: '7.5ch',
    },
    '& #userItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20ch',
        height: '7.5ch',
    },
    '& #menuIconDiv': {
        visibility: 'hidden',
    },
    '& #paginationDiv': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        width: '100%',
        height: '6ch',
        padding: '0 4vw 0 2.5%',
        borderRadius: '0 0 5px 5px',
        backgroundColor: '#fff',
        borderTop: '1px solid rgba(1, 1, 1, 0.25)',
    },
});

const productsTable__mdBox = () => ({
    '& #searchAndFilter': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '90%',
        height: '10vh',
        marginTop: '11vh',
        marginLeft: '8.5vw',
        '& #closeIcon': {
            position: 'absolute',
            top: '1vh',
            left: '30vw',
        },
        '& #FormControl': {
            m: 1,
            width: '30vw',
            backgroundColor: '#fff',
            '& .MuiInputBase-input': {
                height: '0.5vh',
            },
        },
    },
    '& #tableContainer': {
        width: '90%',
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto',
        marginLeft: '10vw',
        padding: '0',
        border: '1px solid rgba(1, 1, 1, 0.25)',
    },
    '& #containerRows': {
        width: '100%',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        padding: '0',
        overflowY: 'scroll',
        overflowX: 'hidden',
    },
    '& #rowsDiv': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2px',
        padding: '0 2.5% 0 2.5%',
        width: '100%',
        height: '7.5ch',
        backgroundColor: '#fff',
        ':hover': {
            '& #menuIconDiv': {
                visibility: 'visible',
            },
        }
    },
    '& #headerDiv': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(1, 1, 1, 0.25)',
        overflowX: 'hidden',
        padding: '0 4vw 0 2.5%',
        width: '100%',
        height: '7.5ch',
        backgroundColor: '#2980B9',
        color: '#fff',
        ':hover': {
            '& #menuIconDiv': {
                visibility: 'visible',
            },
        }
    },
    '& #nameItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '20ch',
        height: '7.5ch',
    },
    '& #priceItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '7.5ch',
        height: '7.5ch',
    },
    '& #quantityItemContainer': {
        position: 'absolute',
        visibility: 'hidden',
    },
    '& #categoryItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10ch',
        height: '7.5ch',
    },
    '& #userItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '15ch',
        height: '7.5ch',
    },
    '& #menuIconDiv': {
        visibility: 'hidden',
    },
    '& #paginationDiv': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        width: '100%',
        height: '6ch',
        padding: '0 4vw 0 2.5%',
        borderRadius: '0 0 5px 5px',
        backgroundColor: '#fff',
        borderTop: '1px solid rgba(1, 1, 1, 0.25)',
    },
});

const productsTable__smBox = () => ({
   '& #searchAndFilter': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '90%',
        height: '10vh',
        marginTop: '11vh',
        marginLeft: '8.5vw',
        '& #closeIcon': {
            position: 'absolute',
            top: '1vh',
            left: '30vw',
        },
        '& #FormControl': {
            m: 1,
            width: '30vw',
            backgroundColor: '#fff',
            '& .MuiInputBase-input': {
                height: '0.5vh',
            },
        },
    },
    '& #tableContainer': {
        width: '100%',
        height: '75vh',
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto',
        padding: '0',
        border: '1px solid rgba(1, 1, 1, 0.25)',
    },
    '& #containerRows': {
        width: '100%',
        margin: 'auto',
        flexDirection: 'column',
        padding: '0',
        overflowY: 'scroll',
        overflowX: 'hidden',
        overflowX: 'hidden',
    },
    '& #rowsDiv': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2px',
        width: '100%',
        height: '7.5ch',
        backgroundColor: '#fff',
        ':hover': {
            '& #menuIconDiv': {
                visibility: 'visible',
            },
        }
    },
    '& #headerDiv': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(1, 1, 1, 0.25)',
        overflowX: 'hidden',
        width: '100%',
        height: '7.5ch',
        backgroundColor: '#2980B9',
        color: '#fff',
        ':hover': {
            '& #menuIconDiv': {
                visibility: 'visible',
            },
        }
    },
    '& #nameItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '2.5%',
        width: '20ch',
        height: '7.5ch',
    },
    '& #priceItemContainer': {
        position: 'absolute',
        visibility: 'hidden',
    },
    '& #quantityItemContainer': {
        position: 'absolute',
        visibility: 'hidden',
    },
    '& #categoryItemContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10ch',
        height: '7.5ch',
    },
    '& #userItemContainer': {
        position: 'absolute',
        visibility: 'hidden',
    },
    '& #paginationDiv': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        width: '100%',
        height: '6ch',
        padding: '0 4vw 0 2.5%',
        borderRadius: '0 0 5px 5px',
        backgroundColor: '#fff',
        borderTop: '1px solid rgba(1, 1, 1, 0.25)',
    },
});



export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    marginLeft: 0,
    marginRight: 0,
    width: '90%',
    height: '7.5vh',
    [theme.breakpoints.down('lg')]: {
        width: 'auto',
    },
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing('12.5%'),
        width: 'auto',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '2.5%',
        left: '0.5%',
        margin: 'auto',
        marginLeft: theme.spacing('0%'),
        width: '100%',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            width: '42.5vw',
            '&:focus': {
                width: '45vw',
            },
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            width: '20vw',
            '&:focus': {
                width: '20.5vw',
            },
        },
        [theme.breakpoints.down('md')]: {
            width: '20vw',
        },
    }
}));

