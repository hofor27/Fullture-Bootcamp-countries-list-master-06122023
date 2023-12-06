import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Country from "./pages/Country";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/country/:country",
    element: <Country />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
