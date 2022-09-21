import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.23)', 
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
        marginLeft: theme.spacing('0'),
        marginTop: '2.5vh',
        width: '90%',
        minHeight: '60px',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    minHeight: '50px',
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
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            '&:focus': {
                width: '80%',
            },
            minHeight: '50px',
        },
    }
}));

