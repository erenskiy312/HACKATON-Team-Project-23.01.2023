import { SecurityUpdateGood } from "@mui/icons-material";
import { Box, Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGames } from "../../../contexts/GameContextProvider";
import GameCard from "./GameCard";

const GameList = () => {
  const { getGames, games } = useGames();

  const { seachParams, setSearchParams } = useSearchParams();

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    getGames();
    setPage(1);
  }, [seachParams]);

  //! paginatation

  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const count = Math.ceil(games.leght / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    console.log(begin);
    const end = begin + itemsPerPage;
    return games.slice(begin, end);
  }
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mb: "4rem",
        }}
      >
        {currentData().map((item) => {
          <GameCard key={item.id} item={item} />;
        })}
        <Pagination
          onChange={handleChange}
          count={count}
          page={page}
          variant="outlined"
          color="secondary"
        />
      </Stack>
    </>
  );
};

export default GameList;
