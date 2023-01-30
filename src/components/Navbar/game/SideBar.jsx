import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGames } from "../../../contexts/GameContextProvider";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { fetchByParams } = useGames();

  const [search, setSearch] = useState(searchParams.get("p") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid item md={3} sx={{ marginTop: "-4%", marginLeft: "70%" }}>
      <Paper elevation={5} sx={{ p: 2 }}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          id="outlined-basic"
          label="search"
          variant="standard"
        />

        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams(e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel
                value="Shooters"
                control={<Radio />}
                label="Shooters"
              />
              <FormControlLabel
                value="Multiplayer"
                control={<Radio />}
                label="Multiplayer"
              />
              <FormControlLabel
                value="Role-playing"
                control={<Radio />}
                label="Role-playing"
              />
              <FormControlLabel
                value="Simulations"
                control={<Radio />}
                label="Simulations"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("price_lte", e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="all" />
            <FormControlLabel
              value="10"
              control={<Radio />}
              label="less than 10$"
            />
            <FormControlLabel
              value="50"
              control={<Radio />}
              label="less than 50$"
            />
            <FormControlLabel
              value="100"
              control={<Radio />}
              label="less than 100$"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
