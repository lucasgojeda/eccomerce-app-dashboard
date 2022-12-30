import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/es';

import { DataGrid } from '@mui/x-data-grid';
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
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Stack from '@mui/material/Stack'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import queryString from 'query-string';

import { prepareProducts } from '../../../helpers/prepareProducts';

import { useSalesStore, useStaticsStore, useUiStore } from '../../../hooks';

import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from '../../../styles/components/sales';

import '../../../styles/components/sales/table/_salesTable.scss';

moment.locale('es');


export const SalesTable = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { dashboardSales } = useStaticsStore();
    const { startUiOpenDialogDelete, tableLoading } = useUiStore();
    const {
        sales,
        salesStartUpdated,
        startLoadSales,
        startSetActiveSale,
    } = useSalesStore();

    const { q = '' } = queryString.parse(location.search);
    const { c = '' } = queryString.parse(location.search);
    let { page: pagePath = 1 } = queryString.parse(location.search);

    const [anchorEl, setAnchorEl] = useState(null);
    const [flagSearch, setFlagSearch] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [filterBy, setFilterBy] = useState('status');
    const [orderBy, setOrderBy] = useState('asc');

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));



    // Filters and search
    useEffect(() => {

        startLoadSales(filterBy, orderBy, searchText, pagePath);

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

    const handleSendedButton = (e, sale) => {
        e.preventDefault();

        salesStartUpdated(sale._id)

        handleLogout();
    }

    const handleDeleteButton = (e) => {
        // e.preventDefault();

        // startUiOpenDialogDelete()


        handleLogout();


    }

    // Normal menu
    const handleMenu = (e, sale) => {
        e.preventDefault();

        startSetActiveSale(sale);

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

                <Box className='mainSalesTableContainer'>

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
                                    <MenuItem value={'user'}>User</MenuItem>
                                    <MenuItem value={'status'}>Status</MenuItem>
                                    <MenuItem value={'total_price'}>Total</MenuItem>
                                    <MenuItem value={'date_requested'}>Entry date</MenuItem>
                                    <MenuItem value={'date_sended'}>Departure date</MenuItem>
                                    {/* <MenuItem value={'user'}>Usuario</MenuItem> */}
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

                            <div id='userItemContainer'>
                                <Typography variant='body2'>
                                    User
                                </Typography>
                            </div>

                            <div id='stateItemContainer'>
                                <Typography variant='body2'>
                                    Status
                                </Typography>
                            </div>

                            <div id='totalItemContainer'>
                                <Typography variant='body2'>
                                    Total
                                </Typography>
                            </div>

                            <div id='dateRequestedItemContainer'>
                                <Typography variant='body2'>
                                    Entry date
                                </Typography>
                            </div>

                            <div id='dateSendedItemContainer'>
                                <Typography variant='body2'>
                                    Departure date
                                </Typography>
                            </div>

                            <div id='menuIconDiv'>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    // onClick={(event) => handleMenu(event, e)}
                                    color="inherit"
                                    id='productMenuIcon'
                                    sx={{
                                        visibility: 'hidden'
                                    }}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                            </div>
                        </div>

                        {
                            (sales.length !== 0 && !tableLoading)
                                ?
                                <Container id='containerRows'>

                                    {
                                        sales.map(
                                            (e, i) => <div
                                                key={e._id}
                                                id='rowsDiv'
                                                style={{
                                                    backgroundColor: (e.status === 'false') ? 'rgba(208, 211, 212, 0.5)' : (i % 2 === 1) && 'rgba(0, 113, 255, 0.25)',
                                                }}
                                            >

                                                <div id='userItemContainer'>
                                                    <Typography variant='body2'>
                                                        {e.user?.name}
                                                    </Typography>
                                                </div>

                                                <div id='stateItemContainer'>
                                                    <Typography variant='body2'>
                                                        {(e.status === 'false' ? 'Enviado' : 'Sin enviar')}
                                                    </Typography>
                                                </div>

                                                <div id='totalItemContainer'>
                                                    <Typography variant='body2'>
                                                        {`$${new Intl.NumberFormat('es-IN').format(e.total_price)}`}
                                                    </Typography>
                                                </div>

                                                <div id='dateRequestedItemContainer'>
                                                    <Typography variant='body2'>
                                                        {(e.date_requested) && moment(e.date_requested).tz("America/Argentina/Buenos_Aires").format('LLL')}
                                                    </Typography>
                                                </div>

                                                <div id='dateSendedItemContainer'>
                                                    <Typography variant='body2'>
                                                        {(e?.date_sended) && moment(e?.date_sended).tz("America/Argentina/Buenos_Aires").format('LLL')}
                                                    </Typography>
                                                </div>

                                                {
                                                    (e.status !== 'false')
                                                        ?
                                                        <IconButton
                                                            size="large"
                                                            aria-label="account of current user"
                                                            aria-controls="menu-appbar"
                                                            aria-haspopup="true"
                                                            onClick={(event) => handleSendedButton(event, e)}
                                                            color="inherit"
                                                            id='productMenuIcon'
                                                        >
                                                            <CheckBoxOutlineBlankIcon />
                                                        </IconButton>
                                                        :
                                                        <IconButton
                                                            size="large"
                                                            aria-label="account of current user"
                                                            aria-controls="menu-appbar"
                                                            aria-haspopup="true"
                                                            color="inherit"
                                                            id='productMenuIcon'
                                                        >
                                                            <CheckBoxIcon />
                                                        </IconButton>
                                                }

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
                                (sales && sales?.length !== 0)
                                &&
                                <Stack
                                    spacing={2}>
                                    <Pagination
                                        size='large'
                                        aria-current='page'
                                        defaultPage={1}
                                        page={Number(pagePath)}
                                        count={Math.ceil(parseInt(dashboardSales) / 8)}
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
