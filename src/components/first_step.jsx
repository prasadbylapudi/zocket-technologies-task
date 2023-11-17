import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const campaignData = [
  { name: "Get Leads as call", icon: "📞" },
  { name: "Get Leads as Facebook messages", icon: "💬" },
  { name: "Increase Page followers", icon: "👥" },
  { name: "Get Customer Leads", icon: "👫" },
  { name: "Get More youtube views", icon: "📺" },
  { name: "Get More website Traffic", icon: "🌐" },
  { name: "Increase Livestore Traffic", icon: "🛒" },
  { name: "Increase your app installs", icon: "📱" },
  { name: "Increase the catalogue sale", icon: "💰" },
];

const Item = styled(Paper)(({ theme, selected }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: selected ? `2px solid ${theme.palette.primary.main}` : "none",
  cursor: "pointer",
  position: "relative",
}));

const CheckmarkIcon = styled(CheckCircleIcon)(({ theme }) => ({
  position: "absolute",
  top: -10,
  right: -10,
  color: theme.palette.primary.main,
  zIndex: 1,
}));

export default function ResponsiveGrid() {
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginTop: 4,
        marginLeft: 6,
        backgroundColor: "#fff",
        width: "90%",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {campaignData.map((item, index) => (
          <Grid
            xs={2}
            sm={4}
            md={4}
            key={index}
            onClick={() => handleItemClick(index)}
          >
            <Item selected={selectedItem === index}>
              {item.icon && <span style={{ marginRight: 8 }}>{item.icon}</span>}
              {item.name}
              {selectedItem === index && <CheckmarkIcon />}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
