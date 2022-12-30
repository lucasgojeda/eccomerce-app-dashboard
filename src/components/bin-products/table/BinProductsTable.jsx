import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import queryString from 'query-string';

import { Box, CircularProgress, Container, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useBinStore, useStaticsStore, useUiStore } from '../../../hooks';

import {
    Search,
    SearchIconWrapper,
    StyledInputBase
} from '../../../styles/components/bin-products';

import '../../../styles/components/bin-products/table/_binProductsTable.scss';


export const BinProductsTable = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {
        binProducts,
        activeBinProduct,
        startSetActiveBinProduct,
        productBinStartEnable,
        startLoadBinProducts,
    } = useBinStore();
    const { dashboardBinProducts } = useStaticsStore();
    const { startUiOpenDialogDelete, tableLoading } = useUiStore();


    const { q = '' } = queryString.parse(location.search);
    const { c = '' } = queryString.parse(location.search);
    let { page: pagePath = 1 } = queryString.parse(location.search);

    const [anchorEl, setAnchorEl] = useState(null);
    const [flagSearch, setFlagSearch] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [filterBy, setFilterBy] = useState('name');
    const [orderBy, setOrderBy] = useState('asc');

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));



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

    // Filters and search
    useEffect(() => {

        startLoadBinProducts(filterBy, orderBy, searchText, pagePath);

    }, [filterBy, orderBy, flagSearch, pagePath]);


    // Filters handleChange
    const handleFilterByChange = (e) => {
        e.preventDefault();

        setFilterBy(e.target.value)
    }

    const handleActiveBinProduct = (e, product) => {
        e.preventDefault();


        startSetActiveBinProduct(product);
    }


    const handleOrderByChange = (e) => {
        e.preventDefault();

        setOrderBy(e.target.value)
    }

    const handleEnableButton = (e) => {
        e.preventDefault();

        productBinStartEnable(activeBinProduct);

        handleLogout();
    }

    const handleDeleteButton = (e) => {
        e.preventDefault();

        startUiOpenDialogDelete();


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

        startSetActiveBinProduct(product);

        console.log(product)

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
                {
                    (binProducts !== undefined)
                        ?
                        <Box className='mainBinProductsTableContainer'>


                            <Container id='searchAndFilter'>

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

                                <Search>


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
                                    (binProducts.length !== 0 && !tableLoading)
                                        ?
                                        <Container id='containerRows'>

                                            {
                                                binProducts.map(
                                                    (e, i) => <div
                                                        onClick={(event) => handleActiveBinProduct(event, e)}
                                                        key={e._id}
                                                        id='rowsDiv'
                                                        style={{
                                                            backgroundColor: (activeBinProduct?._id === e._id) ? 'rgba(93, 6, 129, 0.25)' : (i % 2 === 1) && 'rgba(0, 113, 255, 0.25)',
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
                                        (binProducts && binProducts?.length !== 0)
                                        &&
                                        <Stack
                                            spacing={2}>
                                            <Pagination
                                                size='large'
                                                aria-current='page'
                                                defaultPage={1}
                                                page={Number(pagePath)}
                                                count={Math.ceil(parseInt(dashboardBinProducts) / 8)}
                                                onChange={handlePaginationChange}

                                            />
                                        </Stack>
                                    }
                                </Container>

                            </Container>

                        </Box>
                        :
                        <>
                            <Skeleton height={80} animation="wave" />
                            <Skeleton height={80} animation="wave" />
                            <Skeleton height={80} animation="wave" />
                            <Skeleton height={80} animation="wave" />
                            <Skeleton height={80} animation="wave" />
                            <Skeleton height={80} animation={false} />
                        </>
                }
            </div>
        </div>
    );
}
