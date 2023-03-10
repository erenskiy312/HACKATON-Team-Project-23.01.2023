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
    <Card
      sx={{
        maxWidth: 345,
        width: "20%",
        margin: "3%",
        marginLeft: "12%",
        display: "inline-block",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={item.picture} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.descr}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
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
