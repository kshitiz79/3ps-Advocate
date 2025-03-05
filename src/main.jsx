import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // Redux Provider
import { store } from "./redux/store"; // Your Redux store
import router from "./router/Router";

import "./index.css";
import { DarkModeProvider } from "./DarkMode/DarkModeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </Provider>
  </StrictMode>
);
