import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ACTIONS, API } from "../components/Navbar/helpers/consts";

export const gameContext = createContext();

export const useGames = () => {
  return useContext(gameContext);
};

const INIT_STATE = {
  games: [],
  gamesDetails: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_GAMES:
      return { ...state, games: action.payload };

    case ACTIONS.GET_GAME_DETAILS:
      return { ...state, gamesDetails: action.payload };

    default:
      return state;
  }
};

const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
  const navigate = useNavigate();

  //! getGames
  const getGames = async () => {
    const { data } = await axios.get(`${API}${window.location.search}`);

    dispatch({
      type: ACTIONS.GET_GAMES,
      payload: data,
    });
  };

  //! addGame
  const addGame = async (newGame) => {
    await axios.post(API, newGame);
  };

  //! deleteGame
  const deleteGame = async (id) => {
    await axios.delete(`${API}/${id}`);
    getGames();
  };

  //! fetchByParams

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;
    console.log(url);
    navigate(url);
  };

  const values = {
    getGames,
    addGame,
    deleteGame,
    games: state.games,
    fetchByParams,
  };

  return <gameContext.Provider value={values}>{children}</gameContext.Provider>;
};

export default GameContextProvider;
