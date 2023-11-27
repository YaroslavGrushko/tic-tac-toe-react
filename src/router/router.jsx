import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../containers/App/AppLayout";
import Game from "../containers/Game/Game";
import EditPage from "../containers/EditPage/EditPage";
import * as routPaths from "../consts/routePaths";

export const router = createBrowserRouter([
  {
    path: routPaths.ROOT,
    element: <AppLayout />,
    children: [
      {
        path: routPaths.ROOT,
        element: <Game />,
      },
      {
        path: routPaths.EDIT_PAGE,
        element: <EditPage />,
      },
    ],
  },
]);
