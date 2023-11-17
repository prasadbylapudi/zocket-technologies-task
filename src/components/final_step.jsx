import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const AddDummyData = [
  {
    id: 1,
    avatar: "R",
    title: "Shrimp ",
    subheader: "Sep 14, 2016",
    image: "https://via.placeholder.com/345",
    content:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 2,
    avatar: "C",
    title: "Chicken Alfredo ",
    subheader: "March 22, 2018",
    image: "https://via.placeholder.com/345",
    content:
      "Creamy Alfredo sauce with grilled chicken served over fettuccine pasta. A classic Italian dish that's rich and satisfying.",
  },
  {
    id: 3,
    avatar: "P",
    title: "Vegetarian Pizza",
    subheader: "January 8, 2020",
    image: "https://via.placeholder.com/345",
    content:
      "A delicious vegetarian pizza topped with fresh vegetables, tomato sauce, and melted mozzarella cheese.",
  },
  {
    id: 4,
    avatar: "S",
    title: "Vegetarian Pizza",
    subheader: "January 8, 2020",
    image: "https://via.placeholder.com/345",
    content:
      "A delicious vegetarian pizza topped with fresh vegetables, tomato sauce, and melted mozzarella cheese.",
  },
];

export default function AdCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid
      container
      spacing={0}
      justifyContent="center"
      alignItems="center"
      sx={{ marginLeft: 16 }}
      style={{ width: "80%", marginTop: "5%" }}
    >
      {AddDummyData.map((data) => (
        <Grid item key={data.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 250 }}>
            {" "}
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {data.avatar}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={data.title}
              subheader={data.subheader}
            />
            <CardMedia
              component="img"
              height="120"
              image={data.image}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {data.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
