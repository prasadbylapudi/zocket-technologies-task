import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const productData = [
  {
    id: 1,
    name: "Blueberry Cake with Raw Toppings",
    image: "https://via.placeholder.com/50",
    price: "$25.99",
  },
  {
    id: 2,
    name: "Chocolate Truffle Cake",
    image: "https://via.placeholder.com/50",
    price: "$29.99",
  },
  {
    id: 3,
    name: "Ferrero Rocher Cake",
    image: "https://via.placeholder.com/50",
    price: "$34.99",
  },
  {
    id: 4,
    name: "Green Cupcakes",
    image: "https://via.placeholder.com/50",
    price: "$19.99",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    image: "https://via.placeholder.com/50",
    price: "$27.99",
  },
  {
    id: 6,
    name: "Custard Mixed with Fruit Cake",
    image: "https://via.placeholder.com/50",
    price: "$32.99",
  },
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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const CheckmarkIcon = styled(RadioButtonCheckedIcon)(({ theme }) => ({
  position: "absolute",
  top: -10,
  right: -10,
  color: theme.palette.primary.main,
  zIndex: 1,
}));

export default function ProductSelection() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleProductClick = (id) => {
    setSelectedProduct(id);
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ width: "90%", marginLeft: "6%", marginTop: "8%" }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {productData.map((product) => (
          <Grid
            xs={2}
            sm={4}
            md={4}
            key={product.id}
            onClick={() => handleProductClick(product.id)}
          >
            <Item selected={selectedProduct === product.id}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "50px", marginBottom: "8px" }}
              />
              <div>{product.name}</div>
              <div>{product.price}</div>
              {selectedProduct === product.id && <CheckmarkIcon />}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
