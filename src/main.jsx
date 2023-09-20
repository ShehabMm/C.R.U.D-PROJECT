// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Nav from "./components/nav/nav.jsx";
// import Form from "./pages/form";
// import Error from "./pages/error";
import UserProvider from "./pages/context/context";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);

