import React, { Component } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Layout from "./components/common/layout";
import Page404 from "./components/index/404";
import IndexContent from "./components/index/IndexContent";
import AboutContent from "./components/AboutContent";

import "./styles/Common.css";
import ContactContent from "./components/ContactContent";
import ProjectsContent from "./components/ProjectsContent";
import SynthesizerContent from "./components/projects/synthesizer";

class App extends Component {
  render() {
    const router = createBrowserRouter([
      {
        element: <IndexContent />,
        path: "/",
        errorElement: <Page404 />,
      },
      {
        element: <Layout />,
        errorElement: <Page404 />,
        children: [
          {
            path: "/about",
            element: <AboutContent />,
          },
          {
            path: "/projects",
            element: <Outlet></Outlet>,
            children: [
              {
                path: "",
                element: <ProjectsContent />,
              },
              {
                path: "synthesizer",
                element: <SynthesizerContent />,
              },
            ],
          },
          {
            path: "/contact",
            element: <ContactContent />,
          },
        ],
      },
    ]);

    return <RouterProvider router={router} />;
  }
}

export default App;
