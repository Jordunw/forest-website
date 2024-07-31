import React, { Component } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/common/layout';
import Page404 from './components/index/404';
import IndexContent from "./components/index/IndexContent";
import AboutContent from "./components/about/AboutContent";

import "./styles/Common.css";

class App extends Component {
  render() {
    const router = createBrowserRouter([
      {
        element: <Layout />,
        errorElement: <Page404 />,
        children: [
          {
            path: "/",
            element: <IndexContent />
          },
          {
            path: "/about",
            element: <AboutContent />
          }
        ]
      }
    ]);

    return(
      <RouterProvider router={router} />
    )
  }
}

export default App;
