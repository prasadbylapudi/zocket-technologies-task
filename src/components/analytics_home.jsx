import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/YouTube";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

import CustomizedSteppers from "./stepper";

const platformIcons = {
  Facebook: <FacebookIcon style={{ color: "#1877F2" }} />,
  Google: <GoogleIcon style={{ color: "#b2071d" }} />,
  YouTube: <YouTubeIcon style={{ color: "#b2071d" }} />,
};

const getStatusStyle = (status) => {
  const commonStyles = { padding: "1px", borderRadius: "10px" };
  switch (status) {
    case "Live Now":
      return { ...commonStyles, backgroundColor: "#C8E6C9", color: "#1B5E20" };
    case "Paused":
      return { ...commonStyles, backgroundColor: "#FFF9C4", color: "#F9A825" };
    case "Exhausted":
      return { ...commonStyles, backgroundColor: "#FFEBEE", color: "#D32F2F" };
    default:
      return commonStyles;
  }
};

const dummyData = [
  {
    id: 1,
    isOn: true,
    campaign: {
      image: "https://via.placeholder.com/50",
      title: "Cupcakes Campaign",
      createdDate: " Created on 25 July 2023",
    },
    dateRange: "25 July 2023 - 01 Aug 2023",
    clicks: 300,
    budget: "INR 3,400",
    location: ["Chennai"],
    platform: ["Facebook"],
    status: "Live Now",
  },
  {
    id: 2,
    isOn: false,
    campaign: {
      image: "https://via.placeholder.com/50",
      title: "Chocolate Cake Campaign",
      createdDate: " Created on 25 Sep 2023",
    },
    dateRange: "25 Sep 2020 - 01 Dec 2020",
    clicks: 300,
    budget: "INR 3,400",
    location: ["Bangalore"],
    platform: ["Google"],
    status: "Paused",
  },
  {
    id: 3,
    isOn: true,
    campaign: {
      image: "https://via.placeholder.com/50",
      title: "Cookie Delight Campaign",
      createdDate: " Created on 10 Aug 2023",
    },
    dateRange: "10 Aug 2021 - 25 Aug 2021",
    clicks: 500,
    budget: "INR 5,000",
    location: ["Mumbai"],
    platform: ["YouTube"],
    status: "Live Now",
  },
  {
    id: 4,
    isOn: true,
    campaign: {
      image: "https://via.placeholder.com/50",
      title: "Coffee Lovers Campaign",
      createdDate: " Created on 05 Nov 2023",
    },
    dateRange: "05 Nov 2021 - 15 Nov 2021",
    clicks: 800,
    budget: "INR 8,000",
    location: ["Delhi"],
    platform: ["Facebook"],
    status: "Exhausted",
  },
];

const CustomTable = () => {
  const [searchText, setSearchText] = useState("");
  const [platformFilter, setPlatformFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [data, setData] = useState(dummyData);
  const [showStepper, setShowStepper] = useState(false); // State for displaying the stepper

  const handleToggleSwitch = (id) => {
    setData((prevData) =>
      prevData.map((row) => (row.id === id ? { ...row, isOn: !row.isOn } : row))
    );
  };

  const filteredData = dummyData
    .filter((row) =>
      row.campaign.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter(
      (row) => platformFilter === "" || row.platform.includes(platformFilter)
    )
    .filter(
      (row) =>
        statusFilter === "" ||
        row.status.toLowerCase() === statusFilter.toLowerCase()
    )
    .filter((row) => {
      if (dateFilter === "") return true;

      const currentDate = new Date();
      const rowDate = new Date(row.dateRange.split(" - ")[1]);

      switch (dateFilter) {
        case "last30days":
          return (
            currentDate.getTime() - rowDate.getTime() <=
            30 * 24 * 60 * 60 * 1000
          );
        case "lastWeek":
          return (
            currentDate.getTime() - rowDate.getTime() <= 7 * 24 * 60 * 60 * 1000
          );
        default:
          return true;
      }
    });

  const handleCreateNewCampaign = () => {
    setShowStepper(true);
  };

  return (
    <div
      style={{
        backgroundColor: "#e6f3f9",
      }}
    >
      {showStepper ? (
        <CustomizedSteppers />
      ) : (
        <div
          style={{
            backgroundColor: "#fffff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
              marginLeft: "10%",
              backgroundColor: "#fffff",
            }}
          >
            <div>
              <Typography variant="h5">Your Campaigns</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Check the list of campaigns you created
              </Typography>
            </div>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleCreateNewCampaign}
            >
              Create New Campaign
            </Button>
          </div>

          <Grid
            container
            spacing={2}
            alignItems="center"
            style={{ width: "90%", marginLeft: "10%" }}
          >
            <Grid item xs={6}>
              <TextField
                label="Search Campaign"
                variant="outlined"
                margin="normal"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              container
              justifyContent="space-evenly"
              spacing={2}
            >
              <Typography variant="subtitle1">Platform:</Typography>
              <TextField
                select
                variant="outlined"
                margin="normal"
                value={platformFilter}
                onChange={(e) => setPlatformFilter(e.target.value)}
              >
                <MenuItem value="">All Platforms</MenuItem>
                {Array.from(
                  new Set(dummyData.map((row) => row.platform).flat())
                ).map((platform) => (
                  <MenuItem key={platform} value={platform}>
                    {platform}
                  </MenuItem>
                ))}
              </TextField>

              <Typography variant="subtitle1">Status:</Typography>
              <TextField
                select
                variant="outlined"
                margin="normal"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="">All Status</MenuItem>
                {Array.from(new Set(dummyData.map((row) => row.status))).map(
                  (status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  )
                )}
              </TextField>
              <TextField
                select
                variant="outlined"
                margin="normal"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                <MenuItem value="">All Dates</MenuItem>
                <MenuItem value="last30days">Last 30 Days</MenuItem>
                <MenuItem value="lastWeek">Last Week</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <TableContainer
            component={Paper}
            style={{
              width: "90%",
              marginLeft: "10%",
              backgroundColor: "#fffff",
            }}
          >
            <Table>
              <TableHead
                style={{
                  borderTop: "2px solid #ccc",
                  borderBottom: "2px solid #ccc",
                  background: "#f5f5f5",
                }}
              >
                <TableRow>
                  <TableCell>On/Off</TableCell>
                  <TableCell>Campaign</TableCell>
                  <TableCell>Date Range</TableCell>
                  <TableCell>Clicks</TableCell>
                  <TableCell>Budget</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Platform</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Switch
                        checked={row.isOn}
                        onChange={() => handleToggleSwitch(row.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={row.campaign.image}
                          alt={row.campaign.title}
                          style={{ marginRight: 8, borderRadius: "50%" }}
                        />
                        <div>
                          <div>{row.campaign.title}</div>
                          <div style={{ fontSize: 12, color: "#888" }}>
                            {row.campaign.createdDate}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{row.dateRange}</TableCell>
                    <TableCell>{row.clicks}</TableCell>
                    <TableCell>{row.budget}</TableCell>
                    <TableCell>{row.location.join(", ")}</TableCell>
                    <TableCell>
                      {row.platform.map((platform, index) => (
                        <React.Fragment key={index}>
                          {platformIcons[platform]}
                        </React.Fragment>
                      ))}
                    </TableCell>
                    <TableCell style={getStatusStyle(row.status)}>
                      {row.status}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="edit"
                        style={{ color: "#1877F2" }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        style={{ color: "#FF0000" }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default CustomTable;
