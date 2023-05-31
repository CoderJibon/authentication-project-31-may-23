import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import publicRoutes from "./Routes/PublicRoutes.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={publicRoutes} />
    <App />
    <ToastContainer />
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>
);
