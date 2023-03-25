import React from "react";
import { useSelector } from "react-redux";

import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import InventoryIcon from "@mui/icons-material/Inventory";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import GroupIcon from "@mui/icons-material/Group";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useTheme } from "@mui/material/styles";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";

import { useStaticsStore, useAuthStore } from "../../../hooks";

import "../../../styles/components/home/cards/_cardProducts.scss";
import { ProgressCoffe } from "../progress/ProgressCoffe";

ChartJS.register(ArcElement, Tooltip, Legend);

export const CardProducts = () => {
  const { role, checking } = useAuthStore();
  const {
    dashboardProducts,
    dashboardBinProducts,
    dashboardUsers,
    dashboardBinUsers,
    dashboardSales,
    dashboardRecords,
  } = useStaticsStore();

  const dataDoughnut = {
    labels: ["Enabled users", "Users on trash"],
    datasets: [
      {
        label: "Users",
        data: [dashboardUsers || 0, dashboardBinUsers || 0],
        backgroundColor: ["rgba(40, 180, 99, 0.8)", "rgba(255, 0, 0, 0.7)"],
        borderColor: ["rgba(40, 180, 99, 1)", "rgba(255, 0, 0, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const dataPie = {
    labels: ["Active products", "Products on trash"],
    datasets: [
      {
        label: "Products",
        data: [dashboardProducts || 0, dashboardBinProducts || 0],
        backgroundColor: ["rgba(40, 180, 99, 0.8)", "rgba(255, 0, 0, 0.7)"],
        borderColor: ["rgba(40, 180, 99, 1)", "rgba(255, 0, 0, 1)"],
        borderWidth: 1,
      },
    ],
  };

  if (checking) return <ProgressCoffe />;

  return (
    <Box className="mainCardsContainer">
      <div className="cardContainer">
        {dashboardSales ? (
          <div className="card">
            <div className="border-left-orange">
              <div className="cardInside">
                <div className="titleAndAmountContainer">
                  <Typography variant="body2" className="card-title text-title">
                    SALES
                  </Typography>
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
        ) : (
          <></>
        )}

        {dashboardProducts && dashboardBinProducts ? (
          <div className="card">
            <div className="border-left-pink">
              <div className="cardInside">
                <div className="titleAndAmountContainer">
                  <Typography variant="body2" className="card-title text-title">
                    PRODUCTS
                  </Typography>
                  <h2 className="text-amount">
                    {dashboardProducts + dashboardBinProducts}
                  </h2>
                </div>
                <div className="iconContainer">
                  <div className="icon-shape icon-pie">
                    <InventoryIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {role === "ADMIN_ROLE" && (
          <>
            <div className="card">
              <div className="border-left-blue">
                <div className="cardInside">
                  <div className="titleAndAmountContainer">
                    <Typography
                      variant="body2"
                      className="card-title text-title"
                    >
                      USERS
                    </Typography>
                    <h2 className="text-amount">
                      {dashboardUsers + dashboardBinUsers}
                    </h2>
                  </div>
                  <div className="iconContainer">
                    <div className="icon-shape icon-percent">
                      <GroupIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="border-left-yellow">
                <div className="cardInside">
                  <div className="titleAndAmountContainer">
                    <Typography
                      variant="body2"
                      className="card-title text-title"
                    >
                      RECORDS
                    </Typography>
                    <h2 className="text-amount">{dashboardRecords || 0}</h2>
                  </div>

                  <div className="iconContainer">
                    <div className="icon-shape icon-area">
                      <LibraryBooksIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {role === "ADMIN_ROLE" && (
        <Container id="chartsContainer">
          <Container id="pie">
            <Pie data={dataPie} />
          </Container>

          <Container id="doughnut">
            <Doughnut data={dataDoughnut} />
          </Container>
        </Container>
      )}
    </Box>
  );
};
