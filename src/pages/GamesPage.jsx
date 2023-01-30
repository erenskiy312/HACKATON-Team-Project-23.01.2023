import { Box, Grid } from "@mui/material";
import React from "react";
import GameCard from "../components/Navbar/game/GameCard";
import SideBar from "../components/Navbar/game/SideBar";

const GamesPage = () => {
  return (
    <div>
      <Box sx={{ marginTop: "5rem" }}>
        <Grid container spacing={3}>
          {/* <GameCard /> */}
          <SideBar />
        </Grid>
      </Box>
    </div>
  );
};

export default GamesPage;
