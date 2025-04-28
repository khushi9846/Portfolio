import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import LandingPage from "./home/Langingpage";
import Projects from './component/ui/Projects';
import Page from "./component/page";
import Layout from "./layout";
import Links from "./component/ui/Links";
import Bma from "./component/projectimg/bma";
import "../src/Global.css";
import "../src/index.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Outlet /></Layout>, // Shared layout
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/projects", element: <Projects /> },
        { path: "/projects/:projectSlug", element: <Bma /> }, // dynamic route
        { path: "/aboutme", element: <Page /> },
        { path: "/links", element: <Links /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
