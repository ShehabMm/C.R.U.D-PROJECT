import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./nav/nav.jsx";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import Form from "./form"
import Error from "./error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/nav",
    // @ts-ignore
    element: <Nav  />,
  },
  {
    path: "/form",
    // @ts-ignore
    element: <Form  />,
  },
  {
    path: "*",
    // @ts-ignore
    element: <Error  />,
  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
