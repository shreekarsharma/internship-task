import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer position="top-right" autoClose={5000} />
  </>
);
