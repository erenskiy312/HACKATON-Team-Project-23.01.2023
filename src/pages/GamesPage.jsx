import { Box, Grid } from "@mui/material";
import React from "react";
import GameCard from "../components/Navbar/game/GameCard";
import GameList from "../components/Navbar/game/GameList";
import SideBar from "../components/Navbar/game/SideBar";

const GamesPage = () => {
  return (
    <div>
      <Box sx={{ marginTop: "5rem" }}>
        <Grid container spacing={3}>
          {/* <GameCard /> */}
          <GameList />
          <SideBar />
        </Grid>
      </Box>
    </div>
  );
};

export default GamesPage;
