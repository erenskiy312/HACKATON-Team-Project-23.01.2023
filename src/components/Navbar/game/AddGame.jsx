import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddGame = () => {
  const [game, setGame] = useState({
    name: "",
    descr: "",
    price: 0,
    picture: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...game,
        [e.target.name]: Number(e.target.value),
      };
      setGame(obj);
    } else {
      let obj = {
        ...game,
        [e.target.value]: e.target.value,
      };
      setGame(obj);
    }
  };

  return (
    <Box sx={{ width: "60vw", margin: "10vh auto" }}>
      <Typography align="center" variant="h4" element="h2">
        ADMIN PAGE
      </Typography>
      <TextField
        onChange={handleInp}
        fullWidth
        name="name"
        id="outlined-basic"
        label="name"
        variant="outlined"
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name="descr"
        id="outlined-basic"
        label="description"
        variant="outlined"
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name="price"
        id="outlined-basic"
        label="price"
        variant="outlined"
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name="picture"
        id="outlined-basic"
        label="picture"
        variant="outlined"
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name="type"
        id="outlined-basic"
        label="type"
        variant="outlined"
      />
      {/* <Button
        onClick={() => AddGame(game)}
        variant="outlined"
        fullWidth
        size="large"
      >
        CREATE PRODUCT
      </Button> */}
      <Button
        onClick={() => AddGame(game)}
        variant="contained"
        color="success"
        fullWidth
        size="large"
      >
        PUBLISH GAME
      </Button>
    </Box>
  );
};

export default AddGame;
