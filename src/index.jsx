import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.scss";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Employee from "./pages/employee/employee";
import { store } from "./store/store";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employee />} />
      </Routes>
    </Provider>
    ,
  </BrowserRouter>,
);
