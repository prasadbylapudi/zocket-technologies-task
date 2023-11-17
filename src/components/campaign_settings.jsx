import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CampaignSettings = () => {
  const [budgetType, setBudgetType] = useState("lifetime");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [campaignBudget, setCampaignBudget] = useState(50000);
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const [locationType, setLocationType] = useState("location");
  const [locationValue, setLocationValue] = useState("");
  const [radius, setRadius] = useState(10);

  const handleBudgetTypeChange = (event) => {
    setBudgetType(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleBudgetChange = (event, value) => {
    setCampaignBudget(value);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleLocationTypeChange = (event, newLocationType) => {
    setLocationType(newLocationType);
  };

  const handleLocationValueChange = (event) => {
    setLocationValue(event.target.value);
  };

  const handleRadiusChange = (event, newRadius) => {
    setRadius(newRadius);
  };

  const currencies = ["INR", "USD", "EUR", "GBP"];

  return (  
    <Box sx={{ width: "90%", padding: 3, marginLeft: "auto" }}>
      <Paper elevation={3} sx={{ padding: 3, height: "100%" }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          1. Campaign Settings
        </Typography>

        <div sx={{ marginBottom: 2 }}>
          <Typography variant="h6">Budget and Dates Info:</Typography>
          <ToggleButtonGroup
            value={budgetType}
            exclusive
            onChange={handleBudgetTypeChange}
            sx={{
              borderRadius: 8,
              marginBottom: 1,
            }}
          >
            <ToggleButton value="lifetime">Lifetime</ToggleButton>
            <ToggleButton value="daily">Daily</ToggleButton>
          </ToggleButtonGroup>

          {budgetType === "lifetime" && (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div sx={{ marginBottom: 1 }}>
                  <Typography variant="subtitle1">Start Date:</Typography>
                  <TextField
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    sx={{ marginRight: 2 }}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div sx={{ marginBottom: 1 }}>
                  <Typography variant="subtitle1">End Date:</Typography>
                  <TextField
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                  />
                </div>
              </Grid>
            </Grid>
          )}
        </div>

        <div sx={{ marginBottom: 2 }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ marginBottom: 2 }}
          >
            <Typography variant="h6">Enter Campaign Budget:</Typography>

            <Stack direction="row" alignItems="center">
              {/* <Slider
                value={campaignBudget}
                min={1}
                max={100000}
                onChange={handleBudgetChange}
                sx={{ marginRight: 1 }}
              /> */}
              <Typography sx={{ marginRight: 1 }}>{campaignBudget}</Typography>
            </Stack>

            <label sx={{ marginBottom: 1 }}>
              Currency:
              <Select
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                sx={{ marginLeft: 1 }}
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            </label>
          </Stack>

          <Slider
            value={campaignBudget}
            min={1}
            max={100000}
            onChange={handleBudgetChange}
          />
          <Typography sx={{ marginBottom: 1 }}>{campaignBudget}</Typography>
        </div>

        <div>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            2. Location Info :
          </Typography>
          <Typography variant="h6">Location Type</Typography>
          <ToggleButtonGroup
            value={locationType}
            exclusive
            onChange={handleLocationTypeChange}
          >
            <ToggleButton value="location">Location</ToggleButton>
            <ToggleButton value="radius">Radius</ToggleButton>
          </ToggleButtonGroup>

          {locationType === "location" && (
            <div sx={{ marginBottom: 1 }}>
              <Typography variant="h6">Location</Typography>
              <TextField
                label="Select a place name and address coordinates"
                value={locationValue}
                onChange={handleLocationValueChange}
              />
            </div>
          )}

          {locationType === "radius" && (
            <div>
              <Typography variant="h6">Select Target Radius</Typography>
              <Slider
                value={radius}
                min={1}
                max={30}
                onChange={handleRadiusChange}
              />
              <Typography sx={{ marginBottom: 1 }}>{radius} km</Typography>
            </div>
          )}
        </div>
      </Paper>
    </Box>
  );
};

export default CampaignSettings;
