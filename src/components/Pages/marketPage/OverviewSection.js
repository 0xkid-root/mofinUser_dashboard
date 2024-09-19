import React, { useState } from "react";
import { Box, Tabs, Tab, ButtonGroup, Button } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import TraderSection from "./TraderSection";
import ActivitySection from "./ActivitySection";
import HolderSection from "./HolderSection";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
  ],
  datasets: [
    {
      label: "Price",
      data: [1000, 1200, 1400, 1600, 1800, 3000, 4000, 5000, 7000, 8000, 9000],
      borderColor: "green",
      backgroundColor: "rgba(0, 255, 0, 0.3)",
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      ticks: {
        callback: function (value) {
          return "$" + value.toLocaleString();
        },
      },
    },
  },
};

const OverviewSection = () => {
  const [activeTab, setActiveTab] = useState(0); 
  const [activeRange, setActiveRange] = useState("1W"); 

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleRangeChange = (range) => {
    setActiveRange(range);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <TraderSection />;
      case 2:
        return <ActivitySection />;
      case 3:
        return <HolderSection />;
      default:
        return (
          <Box mt={3} sx={{ width: "100%", height: "400px", position: "relative" }}>
            <Line data={data} options={options} />
          </Box>
        );
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        p: 3,
        boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="overview tabs"
          sx={{
            "& .MuiTab-root": {
              color: "black",
              fontFamily: "Roboto",
              fontWeight: "semibold",
            },
            "& .Mui-selected": {
              color: "black !important",
              fontWeight: "bold",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "black",
            },
          }}
        >
          <Tab label="Overview" />
          <Tab label="Trades" />
          <Tab label="Activity" />
          <Tab label="Holders" />
        </Tabs>

        <Box display="flex" alignItems="center">
          <ButtonGroup>
            {["1W", "1M", "3M", "1Y", "YTD"].map((range) => (
              <Button
                key={range}
                variant={activeRange === range ? "contained" : "outlined"}
                onClick={() => handleRangeChange(range)}
                sx={{
                  ml: 1,
                  backgroundColor: activeRange === range ? "#FFDE02" : "black",
                  color: activeRange === range ? "black" : "white",
                  borderRadius: "10px",
                  border: "none",
                }}
              >
                {range}
              </Button>
            ))}
          </ButtonGroup>
        </Box>

      </Box>
      <hr
        style={{
          color: "#595757",
          height: "1px",
          border: "1px solid #595757",
        }}/>

      {renderContent()}
    </Box>
  );
};

export default OverviewSection;
