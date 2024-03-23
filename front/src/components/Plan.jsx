import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";
import im from "../assets/img/jus.jpg";

const Plan = () => {
  return (
    <div className=" col-md-5">
      <Card
        sx={{ maxWidth: 400 }}
        style={{
          padding: "5px",
          borderRadius: "0px",
        }}
      >
        <CardMedia component="img" height="194" image={im} alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Plan réctangulaire
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained">Choisir</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Plan;
