import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
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

  //! getGames
  const getGames = async () => {
    const { data } = await axios.get(`${API}`);

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

  const values = { getGames, addGame, deleteGame, games: state.games };

  return <gameContext.Provider value={values}>{children}</gameContext.Provider>;
};

export default GameContextProvider;
