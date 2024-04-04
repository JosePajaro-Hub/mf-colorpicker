import React from "react";
import ReactDOM from "react-dom/client";
import ColorPicker from "./components/ColorPicker";
import "./index.css";

const App = () => (
  <div className="container">
   <ColorPicker></ColorPicker>
  </div>
);
ReactDOM.createRoot( document.getElementById("app")).render(<App />);
