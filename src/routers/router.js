import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "../App";
import Home from "../home/Home";
import About from "../components/About";
import Shop from "../shop/Shop";

import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import Banner from "../components/Banner";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },{
            path: "/about",
            element: <About />,
          },
          {
            path: "/shop",
            element: <Shop />,
          },
          {
            path: "/admin/dashboard",
            element: <Banner />,
          },
          {
            path: "/blog",
            element: <Blog />,
          },{
            path: "/book/:id",
            element: <SingleBook />,
            loader: ({ params }) =>
              fetch(`http://localhost:7000/book/${params.id}`)
          },
    ]
    },
  ]);
  export default router