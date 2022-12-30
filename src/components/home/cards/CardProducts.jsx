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

import '../../../styles/components/home/cards/_cardProducts.scss';
import { ProgressCoffe } from '../progress/ProgressCoffe';

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


  const dataDoughnut = {
    labels: ['Enabled users', 'Users on trash'],
    datasets: [
      {
        label: 'Users',
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
    labels: ['Active products', 'Products on trash'],
    datasets: [
      {
        label: 'Products',
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

  if (
    !dashboardProducts ||
    !dashboardBinProducts ||
    !dashboardUsers ||
    !dashboardBinUsers ||
    !dashboardSales ||
    !dashboardRecords
  ) return <ProgressCoffe />;


  return (
    <Box className='mainCardsContainer'>

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
                    >SALES</Typography>
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
                    >PRODUCTS</Typography>
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
                        >USERS</Typography>
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
                        >RECORDS</Typography>
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

      {/* <Container className='waveImage'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L24,58.7C48,53,96,43,144,80C192,117,240,203,288,245.3C336,288,384,288,432,256C480,224,528,160,576,154.7C624,149,672,203,720,197.3C768,192,816,128,864,112C912,96,960,128,1008,149.3C1056,171,1104,181,1152,170.7C1200,160,1248,128,1296,106.7C1344,85,1392,75,1416,69.3L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
      </Container> */}

    </Box>
  );
};