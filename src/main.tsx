import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AssetsPage from "./assetsPage/index.tsx";
import "./index.css";
import WebLoginConfigProvider from "./provider/weblogin.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/assets",
    element: <AssetsPage />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WebLoginConfigProvider>
      <RouterProvider router={router} />
    </WebLoginConfigProvider>
  </React.StrictMode>
);
