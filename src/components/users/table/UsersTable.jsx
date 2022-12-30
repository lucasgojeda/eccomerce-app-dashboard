import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { DataGrid } from '@mui/x-data-grid';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import queryString from 'query-string';

import { useStaticsStore, useUiStore, useUsersStore } from '../../../hooks';

import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from '../../../styles/components/users';

import '../../../styles/components/users/table/_usersTable.scss';


export const UsersTable = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {
        users,
        activeUser,
        startLoadUsers,
        startSetActiveUser
    } = useUsersStore();
    const { dashboardUsers } = useStaticsStore();
    const {
        startUiOpenDialogDelete,
        startUiOpenProductModalEdit,
        startUiOpenUserModalEdit,
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

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    // Filters and search
    useEffect(() => {

        startLoadUsers(filterBy, orderBy, searchText, pagePath);

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

    const handleActiveUser = (e, user) => {
        e.preventDefault();

        startSetActiveUser(user);
    }

    const handleEditButton = (e) => {
        e.preventDefault();

        startUiOpenUserModalEdit()

        handleLogout();
    }

    const handleDeleteButton = (e) => {
        e.preventDefault();

        startUiOpenDialogDelete()


        handleLogout();


    }

    // Normal menu
    const handleMenu = (e, user) => {
        e.preventDefault();

        startSetActiveUser(user);

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
                    (users !== undefined)
                        ?
                        <Box className='mainUsersTableContainer'>


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
                                        <MenuItem value={'role'}>Role</MenuItem>
                                        <MenuItem value={'email'}>Email</MenuItem>
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

                                    <div id='roleItemContainer'>
                                        <Typography variant='body2'>
                                            Role
                                        </Typography>
                                    </div>

                                    <div id='emailItemContainer'>
                                        <Typography variant='body2'>
                                            Email
                                        </Typography>
                                    </div>

                                </div>


                                {
                                    (users.length !== 0 && !tableLoading)
                                        ?
                                        <Container id='containerRows'>

                                            {
                                                users.map(
                                                    (e, i) => <div
                                                        onClick={(event) => handleActiveUser(event, e)}
                                                        onDoubleClick={handleEditButton}
                                                        key={e._id}
                                                        id='rowsDiv'
                                                        style={{
                                                            backgroundColor: (activeUser?._id === e._id) ? 'rgba(93, 6, 129, 0.25)' : (i % 2 === 1) && 'rgba(0, 113, 255, 0.25)',
                                                        }}
                                                    >

                                                        <div id='nameItemContainer'>
                                                            <Typography variant='body2'>
                                                                {e.name}
                                                            </Typography>
                                                        </div>

                                                        <div id='roleItemContainer'>
                                                            <Typography variant='body2'>
                                                                {e.role}
                                                            </Typography>
                                                        </div>

                                                        <div id='emailItemContainer'>
                                                            <Typography variant='body2'>
                                                                {e.email}
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
                                        (users && users?.length !== 0)
                                        &&
                                        <Stack
                                            spacing={2}>
                                            <Pagination
                                                size='large'
                                                aria-current='page'
                                                defaultPage={1}
                                                page={Number(pagePath)}
                                                count={Math.ceil(parseInt(dashboardUsers) / 8)}
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
