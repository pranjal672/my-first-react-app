import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ErrorThrow from './error';
import AllMeetupsPage from './pages/allmeetups';
import NewMeetupsPage from './pages/newmeetups';
import FavoritesPage from './pages/favorites';
import { FavoriteContextProvider } from "./store/favorite-context"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorThrow />,
    children: [
      {
        path: "/",
        element: <AllMeetupsPage />

      },
      {
        path: "/new-meetup",
        element: <NewMeetupsPage />
      },
      {
        path: "/favourite",
        element: <FavoritesPage />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoriteContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </FavoriteContextProvider>
);