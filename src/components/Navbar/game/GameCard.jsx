import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useGames } from "../../../contexts/GameContextProvider";

export default function GameCard({ item }) {
  const { deleteGame } = useGames();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia image="/static/images/cards/contemplative-reptile.jpg" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          .
        </Typography>
        <Typography variant="body2" color="text.secondary">
          .
        </Typography>
        <Typography variant="body2" color="text.secondary">
          .
        </Typography>
        <Typography variant="body2" color="text.secondary">
          .
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteGame(item.id)}>
          Delete
        </Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
}
