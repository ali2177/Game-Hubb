import { createBrowserRouter } from "react-router-dom";
import GameDetail from "./Pages/GameDetail";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetail /> },
    ],
  },
]);

export default router;
