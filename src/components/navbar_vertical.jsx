import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import CampaignIcon from "@mui/icons-material/VolumeUp";
import ProductsIcon from "@mui/icons-material/ShoppingCart";
import CustomerIcon from "@mui/icons-material/People";
import logo from "../assets/comp_logo.png";

const VerticalNavbar = () => {
  const tabs = ["Home", "Campaign", "Products", "Customer"];
  const tabIcons = [
    <HomeSharpIcon />,
    <CampaignIcon />,
    <ProductsIcon />,
    <CustomerIcon />,
  ];

  const activeTabIndex = 1; // Set the index of the active tab (Campaign in this case)

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#ffffff",
          color: "#000",
        }}
      >
        <Toolbar>
          <Typography style={{ marginLeft: "240px" }} variant="h4">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Add your main content here */}
      <div style={{ display: "flex", backgroundColor: "#e6f3f9" }}>
        <Drawer anchor="left" variant="permanent" style={{ width: "240px" }}>
          <div
            style={{
              backgroundColor: "#001738",
              height: "100%",
              color: "#fff",
            }}
          >
            <List>
              <img
                src={logo}
                alt="company logo"
                width="40%"
                style={{ marginLeft: 30, borderRadius: "40%" }}
              />
              {tabs.map((tab, index) => (
                <ListItem
                  button
                  key={index}
                  style={{
                    backgroundColor:
                      index === activeTabIndex ? "#00557e" : null,
                  }}
                >
                  {index === 0 ? (
                    <HomeSharpIcon style={{ color: "white" }} />
                  ) : (
                    tabIcons[index]
                  )}
                  <ListItemText primary={tab} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>

        <div
          style={{
            marginLeft: "480px",
            marginTop: "64px",
            padding: "10px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default VerticalNavbar;
