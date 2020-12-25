import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Cursor from "./components/atoms/CustomCursor/CustomCursor";
import Header from "./components/organisms/Header/Header";
import Routes from "./components/Routes";
import Footer from "./components/organisms/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
      <Cursor />
    </Router>
  );
}

export default App;
