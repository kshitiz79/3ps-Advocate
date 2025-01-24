import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
import { store } from "./redux/store"; // Import your Redux store
import router from "./router/Router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap your app in Provider */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
