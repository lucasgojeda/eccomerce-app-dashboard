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
import Stack from '@mui/material/Stack'
import VisibilityIcon from '@mui/icons-material/Visibility';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import queryString from 'query-string';

import { useRecordsStore, useStaticsStore, useUiStore } from '../../../hooks';

import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from '../../../styles/components/records';

import '../../../styles/components/records/table/_recordTable.scss'

moment.locale('es');

export const RecordsTable = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { dashboardRecords } = useStaticsStore();
    const { startUiOpenRecordModal, tableLoading } = useUiStore();
    const {
        records,
        activeRecord,
        startLoadRecords,
        startSetActiveRecord,
    } = useRecordsStore();

    const { q = '' } = queryString.parse(location.search);
    const { c = '' } = queryString.parse(location.search);
    let { page: pagePath = 1 } = queryString.parse(location.search);

    const [anchorEl, setAnchorEl] = useState(null);
    const [flagSearch, setFlagSearch] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [filterBy, setFilterBy] = useState('date');
    const [orderBy, setOrderBy] = useState('desc');

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    // Filters and search
    useEffect(() => {

        startLoadRecords(filterBy, orderBy, searchText, pagePath);

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

    const handleActiveRecord = (e, record) => {
        e.preventDefault();

        startSetActiveRecord(record);
    }

    const handleOpenButton = (e) => {
        e.preventDefault();

        startUiOpenRecordModal()
    }

    // Normal menu
    const handleMenu = (e, record) => {
        e.preventDefault();

        startSetActiveRecord(record);

        startUiOpenRecordModal()


    };

    return (
        <div>

            <div>
                {
                    (records !== undefined)
                        ?
                        <Box className='mainRecordsTableContainer'>


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
                                        <MenuItem value={'action'}>Action</MenuItem>
                                        <MenuItem value={'type'}>Type</MenuItem>
                                        <MenuItem value={'date'}>Date</MenuItem>
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

                                    <div id='actionItemContainer'>
                                        <Typography variant='body2'>
                                            Action
                                        </Typography>
                                    </div>

                                    <div id='typeItemContainer'>
                                        <Typography variant='body2'>
                                            Type
                                        </Typography>
                                    </div>

                                    <div id='userItemContainer'>
                                        <Typography variant='body2'>
                                            User
                                        </Typography>
                                    </div>

                                    <div id='dateItemContainer'>
                                        <Typography variant='body2'>
                                            Date
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
                                    (records.length !== 0 && !tableLoading)
                                        ?
                                        <Container id='containerRows'>

                                            {
                                                records.map(
                                                    (e, i) => <div
                                                        onClick={(event) => handleActiveRecord(event, e)}
                                                        onDoubleClick={handleOpenButton}
                                                        key={e._id}
                                                        id='rowsDiv'
                                                        style={{
                                                            backgroundColor: (activeRecord?._id === e._id) ? 'rgba(93, 6, 129, 0.25)' : (i % 2 === 1) && 'rgba(0, 113, 255, 0.25)',
                                                        }}
                                                    >

                                                        <div id='nameItemContainer'>
                                                            <Typography variant='body2'>
                                                                {e?.name.split(" ")[0]} {e?.name.split(" ")[1]}
                                                            </Typography>
                                                        </div>

                                                        <div id='actionItemContainer'>
                                                            <Typography variant='body2'>
                                                                {e.action}
                                                            </Typography>
                                                        </div>

                                                        <div id='typeItemContainer'>
                                                            <Typography variant='body2'>
                                                                {e.type}
                                                            </Typography>
                                                        </div>

                                                        <div id='userItemContainer'>
                                                            <Typography variant='body2'>
                                                                {e.user?.name}
                                                            </Typography>
                                                        </div>

                                                        <div id='dateItemContainer'>
                                                            <Typography variant='body2'>
                                                                {moment(e.date).tz("America/Argentina/Buenos_Aires").format('LLL')}
                                                            </Typography>
                                                        </div>

                                                        <div id='menuIconDiv'>
                                                            <IconButton
                                                                size="large"
                                                                aria-label="account of current user"
                                                                aria-controls="menu-appbar"
                                                                aria-haspopup="true"
                                                                onClick={(event) => handleMenu(event, e)}
                                                                color="inherit"
                                                                id='productMenuIcon'
                                                            >
                                                                <VisibilityIcon />
                                                            </IconButton>
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
                                        (records && records?.length !== 0)
                                        &&
                                        <Stack
                                            spacing={2}>
                                            <Pagination
                                                size='large'
                                                aria-current='page'
                                                defaultPage={1}
                                                page={Number(pagePath)}
                                                count={Math.ceil(parseInt(dashboardRecords) / 8)}
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
