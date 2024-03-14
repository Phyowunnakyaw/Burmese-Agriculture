import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/Home";
import datas from '../data/db.json'
import Blogs from "../pages/Blogs";
import Detail from "../pages/Detail";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/blogs',
          element: <Blogs datas={ datas } />
        },
        {
          path: '/blog/:id',
          element: <Detail datas={ datas } />
        }
      ]
    },
  ]);

export default router;