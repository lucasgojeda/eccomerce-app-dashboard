import React from 'react';
import { useSelector } from 'react-redux';

import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import InventoryIcon from '@mui/icons-material/Inventory';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useTheme } from '@mui/material/styles';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';

import { useStaticsStore, useAuthStore } from '../../../hooks';

import { cardProducts } from '../../../styles/components/ui';

ChartJS.register(ArcElement, Tooltip, Legend);


export const CardProducts = () => {

  const { role } = useAuthStore();
  const {
    dashboardProducts,
    dashboardBinProducts,
    dashboardUsers,
    dashboardBinUsers,
    dashboardSales,
    dashboardRecords } = useStaticsStore();


  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const xl = useMediaQuery(theme.breakpoints.down('xl'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));


  const dataDoughnut = {
    labels: ['Usuaros habilitados', 'Usuarios en papelera'],
    datasets: [
      {
        label: 'Usuarios',
        data: [dashboardUsers, dashboardBinUsers],
        backgroundColor: [
          'rgba(40, 180, 99, 0.8)',
          'rgba(255, 0, 0, 0.7)',
        ],
        borderColor: [
          'rgba(40, 180, 99, 1)',
          'rgba(255, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataPie = {
    labels: ['Productos activos', 'Productos en papelera'],
    datasets: [
      {
        label: 'Productos',
        data: [dashboardProducts, dashboardBinProducts],
        backgroundColor: [
          'rgba(40, 180, 99, 0.8)',
          'rgba(255, 0, 0, 0.7)',
        ],
        borderColor: [
          'rgba(40, 180, 99, 1)',
          'rgba(255, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // if (
  //   !dashboardProducts ||
  //   !dashboardBinProducts ||
  //   !dashboardUsers ||
  //   !dashboardBinUsers ||
  //   !dashboardSales ||
  //   !dashboardRecords
  // ) return '';


  return (
    <Box sx={cardProducts(sm, md, lg, xl)}>

      <div className="cardContainer">

        {
          (dashboardSales)
            ?
            <div className="card">
              <div className="border-left-orange">
                <div className="cardInside">
                  <div className="titleAndAmountContainer">
                    <Typography
                      variant='body2'
                      className="card-title text-title"
                    >VENTAS</Typography>
                    <h2 className="text-amount">{dashboardSales}</h2>
                  </div>
                  <div className="iconContainer">
                    <div className="icon-shape icon-user">
                      <TrendingUpIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            <></>
        }


        {
          (dashboardProducts && dashboardBinProducts)
            ?
            <div className="card">
              <div className="border-left-pink">
                <div className="cardInside">
                  <div className="titleAndAmountContainer">
                    <Typography
                      variant='body2'
                      className="card-title text-title"
                    >PRODUCTOS</Typography>
                    <h2 className="text-amount">{dashboardProducts + dashboardBinProducts}</h2>
                  </div>
                  <div className="iconContainer">
                    <div className="icon-shape icon-pie">
                      <InventoryIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            <></>
        }

        {
          (role === 'ADMIN_ROLE')
          &&
          <>
            {
              (dashboardUsers && dashboardBinUsers)
                ?
                <div className="card">
                  <div className="border-left-blue">
                    <div className="cardInside">
                      <div className="titleAndAmountContainer">
                        <Typography
                          variant='body2'
                          className="card-title text-title"
                        >USUARIOS</Typography>
                        <h2 className="text-amount">{dashboardUsers + dashboardBinUsers}</h2>
                      </div>
                      <div className="iconContainer">
                        <div className="icon-shape icon-percent">
                          <GroupIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <></>
            }


            {
              (dashboardRecords)
                ?
                <div className="card">

                  <div className="border-left-yellow">
                    <div className="cardInside">

                      <div className="titleAndAmountContainer">
                        <Typography
                          variant='body2'
                          className="card-title text-title"
                        >REGISTROS</Typography>
                        <h2 className="text-amount">{dashboardRecords}</h2>
                      </div>

                      <div className="iconContainer">
                        <div className="icon-shape icon-area">
                          <LibraryBooksIcon />
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
                :
                <></>
            }
          </>
        }


      </div>

      {
        (role === 'ADMIN_ROLE')
        &&
        <Container id='chartsContainer'>

          {
            (dashboardProducts && dashboardBinProducts)
            ?
            <Container id='pie'>
              <Pie data={dataPie} />
            </Container>
            :
            <></>  
        }

          {
            (dashboardUsers && dashboardBinUsers)
            ?
            <Container id='doughnut'>
              <Doughnut data={dataDoughnut} />
            </Container>
              :
              <></>
          }

        </Container>
      }

    </Box>
  );
};