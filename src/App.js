import React from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/UI/Navbar/Navbar.jsx";
import { AppRouter } from "./components/AppRouter";
import { MyHeader } from "./components/UI/header/MyHeader";
import { MyFooter } from "./components/UI/footer/MyFooter";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="top">
          <MyHeader
            className="header"
            image={require("./images/6807896.png")}
          />
          <Navbar className="navbar" />
          <AppRouter />
        </div>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
