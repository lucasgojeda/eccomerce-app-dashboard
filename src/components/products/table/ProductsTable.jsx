import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { Box, CircularProgress, Container, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import queryString from 'query-string';

import { useProductsStore, useStaticsStore, useUiStore } from '../../../hooks';

import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from '../../../styles/components/products';

import '../../../styles/components/products/table/_productsTable.scss'


export const ProductsTable = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();

    const { dashboardProducts } = useStaticsStore();
    const {
        products,
        activeProduct,
        startSetActiveProduct,
        startLoadProducts
    } = useProductsStore();
    const {
        startUiOpenDialogDelete,
        startUiOpenProductModalEdit,
        tableLoading,
    } = useUiStore();

    const { q = '' } = queryString.parse(location.search);
    const { c = '' } = queryString.parse(location.search);
    let { page: pagePath = 1 } = queryString.parse(location.search);

    const [anchorEl, setAnchorEl] = useState(null);
    const [flagSearch, setFlagSearch] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [filterBy, setFilterBy] = useState('name');
    const [orderBy, setOrderBy] = useState('asc');

    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    // Filters and search
    useEffect(() => {

        startLoadProducts(filterBy, orderBy, searchText, pagePath);

    }, [filterBy, orderBy, flagSearch, pagePath]);


    // Filters handleChange
    const handleFilterByChange = (e) => {
        e.preventDefault();

        setFilterBy(e.target.value)
    }

    const handleOrderByChange = (e) => {
        e.preventDefault();

        setOrderBy(e.target.value)
    }

    // Paginations handleChange
    const handlePaginationChange = (e, value) => {

        console.log(value)

        let url = '';

        if (c !== '') {

            url += `?c=${c}`
        } else {

            if (q !== '') {

                url += `?q=${q}`
            }
        }

        (!url.includes('?')) ? url += `?page=${value}` : url += `&page=${value}`;

        navigate(url)
    }

    const handleActiveProduct = (e, product) => {
        e.preventDefault();

        startSetActiveProduct(product);
    }

    const handleEditButton = (e) => {
        e.preventDefault();

        startUiOpenProductModalEdit()

        handleLogout();
    }

    const handleDeleteButton = (e) => {
        e.preventDefault();

        startUiOpenDialogDelete()


        handleLogout();


    }

    // Search
    const handleInputChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchText !== '') {

            setFlagSearch(flagSearch + 1);
        }


    }

    // Normal menu
    const handleMenu = (e, product) => {
        e.preventDefault();

        startSetActiveProduct(product);

        setAnchorEl(e.currentTarget);
    };

    const handleLogout = () => {
        handleClose();
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>

            <div>

                <Box className='mainProductsTableContainer'>

                    <Container id='searchAndFilter'>

                        <Box className='ContainerFormsControl'>

                            <FormControl id="FormControl">

                                <InputLabel id="demo-simple-select-label">Filter by</InputLabel>

                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={filterBy}
                                    defaultValue={'name'}
                                    label="filterBy"
                                    onChange={handleFilterByChange}
                                >
                                    <MenuItem value={'name'}>Name</MenuItem>
                                    <MenuItem value={'category'}>Category</MenuItem>
                                    <MenuItem value={'price'}>Price</MenuItem>
                                    <MenuItem value={'quantity'}>Quantity</MenuItem>
                                    <MenuItem value={'user'}>User</MenuItem>
                                </Select>

                            </FormControl>

                            <FormControl id="FormControl">

                                <InputLabel id="demo-simple-select-label">Order by</InputLabel>

                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={orderBy}
                                    defaultValue={'ascendent'}
                                    label="orderBy"
                                    onChange={handleOrderByChange}
                                >
                                    <MenuItem value={'asc'}>Ascendent</MenuItem>
                                    <MenuItem value={'desc'}>Descendent</MenuItem>
                                </Select>

                            </FormControl>

                        </Box>

                        <Search className='Search'>


                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>

                            <form onSubmit={handleSearch}>
                                <StyledInputBase
                                    onChange={handleInputChange}
                                    type='text'
                                    name='searchText'
                                    autoComplete='off'
                                    value={searchText}
                                />
                            </form>

                            {
                                (searchText !== '')
                                &&
                                <IconButton
                                    id='closeIcon'
                                    onClick={() => setSearchText('')}
                                    color="inherit"
                                >
                                    <CloseIcon />
                                </IconButton>
                            }

                        </Search>

                    </Container>


                    <Container id='tableContainer'>

                        <div id='headerDiv'>

                            <div id='nameItemContainer'>
                                <Typography variant='body2'>
                                    Name
                                </Typography>
                            </div>

                            <div id='priceItemContainer'>
                                <Typography variant='body2'>
                                    Price
                                </Typography>
                            </div>

                            <div id='quantityItemContainer'>
                                <Typography variant='body2'>
                                    Quantity
                                </Typography>
                            </div>

                            <div id='categoryItemContainer'>
                                <Typography variant='body2'>
                                    Category
                                </Typography>
                            </div>

                            <div id='userItemContainer'>
                                <Typography variant='body2'>
                                    User
                                </Typography>
                            </div>

                        </div>


                        {
                            (products.length !== 0 && !tableLoading)
                                ?
                                <Container id='containerRows'>
                                    {
                                        products.map(
                                            (e, i) => <div
                                                onClick={(event) => handleActiveProduct(event, e)}
                                                onDoubleClick={handleEditButton}
                                                key={e._id}
                                                id='rowsDiv'
                                                style={{
                                                    backgroundColor: (activeProduct?._id === e._id) ? 'rgba(93, 6, 129, 0.25)' : (i % 2 === 1) && 'rgba(0, 113, 255, 0.25)',
                                                }}
                                            >

                                                <div id='nameItemContainer'>
                                                    <Typography variant='body2'>
                                                        {e.name.split(" ")[0]} {e.name.split(" ")[1]}
                                                    </Typography>
                                                </div>

                                                <div id='priceItemContainer'>
                                                    <Typography variant='body2'>
                                                        {`$${new Intl.NumberFormat('es-IN').format(e.price)}`}
                                                    </Typography>
                                                </div>

                                                <div id='quantityItemContainer'>
                                                    <Typography variant='body2'>
                                                        {new Intl.NumberFormat('es-IN').format(e.quantity)}
                                                    </Typography>
                                                </div>

                                                <div id='categoryItemContainer'>
                                                    <Typography variant='body2'>
                                                        {e.category.name}
                                                    </Typography>
                                                </div>

                                                <div id='userItemContainer'>
                                                    <Typography variant='body2'>
                                                        {e.user.name}
                                                    </Typography>
                                                </div>


                                            </div>
                                        )
                                    }
                                </Container>
                                :
                                <div className='progressTable'>
                                    <CircularProgress color="info" size='80px' sx={{ display: 'block' }} />
                                </div>
                        }


                        <Container id='paginationDiv'>
                            {
                                (products && products?.length !== 0)
                                &&
                                <Stack
                                    spacing={2}>
                                    <Pagination
                                        size='large'
                                        aria-current='page'
                                        defaultPage={1}
                                        page={Number(pagePath)}
                                        count={Math.ceil(parseInt(dashboardProducts) / 8)}
                                        onChange={handlePaginationChange}

                                    />
                                </Stack>
                            }
                        </Container>

                    </Container>

                </Box>
            </div>
        </div>
    );
}
