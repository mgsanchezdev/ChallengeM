import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import SearchResult from '../Pages/SearchResult/SearchResult';
import DetailsProduct from '../Pages/DetailsProduct/DetailsProduct';

const AllRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/items', element: <SearchResult /> },
    { path: '/items/:id', element: <DetailsProduct /> },
  ]);

  return routes;
};
export default AllRoutes;
