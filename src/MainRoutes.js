import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import EditProductGame from "./pages/EditProductGame";
import FreePage from "./pages/FreePage";
import GamesPage from "./pages/GamesPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <GamesPage />, id: 1 },
    { link: "/free", element: <FreePage />, id: 2 },
    { link: "/admin", element: <AdminPage />, id: 3 },
    { link: "/edit/:id", element: <EditProductGame />, id: 4 },
  ];

  const PRIVATE_ROUTES = [
    { link: "/admin", element: <AdminPage />, id: 5 },
    { link: "/edit/:id", element: <EditProductGame />, id: 6 },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
