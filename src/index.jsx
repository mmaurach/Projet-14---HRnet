import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./index.scss";
import Home from "./pages/home/home";
import { store } from "./store/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Home />
  </Provider>,
);
